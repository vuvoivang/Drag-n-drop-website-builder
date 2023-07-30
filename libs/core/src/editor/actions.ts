import {
  deprecationWarning,
  ERROR_INVALID_NODEID,
  ROOT_NODE,
  DEPRECATED_ROOT_NODE,
  QueryCallbacksFor,
  ERROR_NOPARENT,
  ERROR_DELETE_TOP_LEVEL_NODE,
  ERROR_CLONE_TOP_LEVEL_NODE,
  CallbacksFor,
  Delete,
  ERROR_NOT_IN_RESOLVER,
  ROOT_PATH,
} from 'libs/utils/src';
import invariant from 'tiny-invariant';
import React from 'react';

import { QueryMethods } from './query';

import {
  EditorState,
  Indicator,
  NodeId,
  Node,
  Nodes,
  Options,
  NodeEventTypes,
  NodeTree,
  SerializedNodes,
  NodeSelector,
  NodeSelectorType,
  PageData,
  SerializedData,
  SerializedNode,
  ComponentData,
} from '../interfaces';
import { fromEntries } from '../utils/fromEntries';
import { getNodesFromSelector } from '../utils/getNodesFromSelector';
import { removeNodeFromEvents } from '../utils/removeNodeFromEvents';
import { mappingDocumentsToCollections } from 'display/utils/helper';
import { cloneDeep } from 'lodash';
import { getCurrentRootNodeIdPage } from '..';

const Methods = (state: EditorState, query: QueryCallbacksFor<typeof QueryMethods>) => {
  /** Helper functions */
  const addNodeTreeToParent = (
    tree: NodeTree,
    parentId?: NodeId,
    addNodeType?:
      | {
        type: 'child';
        index: number;
      }
      | {
        type: 'linked';
        id: string;
      }
  ) => {
    const iterateChildren = (id: NodeId, parentId?: NodeId) => {
      const node = tree.nodes[id];

      if (typeof node.data.type !== 'string') {
        invariant(
          state.options.resolver[node.data.name],
          ERROR_NOT_IN_RESOLVER.replace('%node_type%', `${(node.data.type as any).name}`)
        );
      }

      state.nodes[id] = {
        ...node,
        data: {
          ...node.data,
          parent: parentId,
        },
      };

      if (node.data.nodes.length > 0) {
        delete state.nodes[id].data.props.children;
        node.data.nodes.forEach((childNodeId) => iterateChildren(childNodeId, node.id));
      }

      Object.values(node.data.linkedNodes).forEach((linkedNodeId) => iterateChildren(linkedNodeId, node.id));
    };

    iterateChildren(tree.rootNodeId, parentId);

    if (!parentId) {
      invariant(tree.rootNodeId.startsWith(ROOT_NODE), 'Cannot add non-root Node without a parent');

      return;
    }

    const parent = getParentAndValidate(parentId);

    if (addNodeType.type === 'child') {
      const index = addNodeType.index;

      if (index != null) {
        parent.data.nodes.splice(index, 0, tree.rootNodeId);
      } else {
        parent.data.nodes.push(tree.rootNodeId);
      }

      return;
    }

    parent.data.linkedNodes[addNodeType.id] = tree.rootNodeId;
  };

  const getParentAndValidate = (parentId: NodeId): Node => {
    invariant(parentId, ERROR_NOPARENT);
    const parent = state.nodes[parentId];
    invariant(parent, ERROR_INVALID_NODEID);
    return parent;
  };

  const deleteNode = (id: NodeId) => {
    const targetNode = state.nodes[id],
      parentNode = state.nodes[targetNode.data.parent];
    if (!targetNode) return;
    if (targetNode.data.nodes) {
      // we deep clone here because otherwise immer will mutate the node
      // object as we remove nodes
      [...targetNode.data.nodes].forEach((childId) => deleteNode(childId));
    }

    if (targetNode.data.linkedNodes) {
      Object.values(targetNode.data.linkedNodes).map((linkedNodeId) => deleteNode(linkedNodeId));
    }

    if (parentNode) {
      const isChildNode = parentNode.data.nodes.includes(id);

      if (isChildNode) {
        const parentChildren = parentNode.data.nodes;
        parentChildren.splice(parentChildren.indexOf(id), 1);
      } else {
        const linkedId = Object.keys(parentNode.data.linkedNodes).find((id) => parentNode.data.linkedNodes[id] === id);
        if (linkedId) {
          delete parentNode.data.linkedNodes[linkedId];
        }
      }
    }

    removeNodeFromEvents(state, id);
    delete state.nodes[id];
  };

  const cloneNode = (id: NodeId, parentId: NodeId) => {
    const targetNode = state.nodes[id],
      parentNode = state.nodes[targetNode.data.parent];

    const newNode = query.createNode(React.createElement(targetNode.data.type, targetNode.data.props));
    addNodeTreeToParent(
      {
        nodes: {
          [newNode.id]: newNode,
        },
        rootNodeId: newNode.id,
      },
      parentId,
      { type: 'child', index: parentNode.data.nodes.indexOf(id) }
    );

    if (targetNode.data.nodes) {
      // we deep clone here
      [...targetNode.data.nodes].forEach((childId) => cloneNode(childId, newNode.id));
    }
  };

  return {
    /**
     * @private
     * Add a new linked Node to the editor.
     * Only used internally by the <Element /> component
     *
     * @param tree
     * @param parentId
     * @param id
     */
    addLinkedNodeFromTree(tree: NodeTree, parentId: NodeId, id: string) {
      const parent = getParentAndValidate(parentId);

      const existingLinkedNode = parent.data.linkedNodes[id];

      if (existingLinkedNode) {
        deleteNode(existingLinkedNode);
      }

      addNodeTreeToParent(tree, parentId, { type: 'linked', id });
    },

    /**
     * Add a new Node to the editor.
     *
     * @param nodeToAdd
     * @param parentId
     * @param index
     */
    add(nodeToAdd: Node | Node[], parentId: NodeId, index?: number) {
      // TODO: Deprecate adding array of Nodes to keep implementation simpler
      let nodes = [nodeToAdd];
      if (Array.isArray(nodeToAdd)) {
        deprecationWarning('actions.add(node: Node[])', {
          suggest: 'actions.add(node: Node)',
        });
        nodes = nodeToAdd;
      }
      // @ts-ignore
      nodes.forEach((node: Node) => {
        addNodeTreeToParent(
          {
            nodes: {
              [node.id]: node,
            },
            rootNodeId: node.id,
          },
          parentId,
          { type: 'child', index }
        );
      });
    },

    /**
     * Add a NodeTree to the editor
     *
     * @param tree
     * @param parentId
     * @param index
     */
    addNodeTree(tree: NodeTree, parentId?: NodeId, index?: number) {
      addNodeTreeToParent(tree, parentId, { type: 'child', index });
    },

    /**
     * Delete a Node
     * @param id
     */
    delete(selector: NodeSelector<NodeSelectorType.Id>) {
      const targets = getNodesFromSelector(state.nodes, selector, {
        existOnly: true,
        idOnly: true,
      });

      targets.forEach(({ node }) => {
        invariant(!query.node(node.id).isTopLevelNode(), ERROR_DELETE_TOP_LEVEL_NODE);
        deleteNode(node.id);
        this.removeReferencedNodeFromTheme(node.id);
      });
    },

    /**
     * clone a Node
     * @param id
     */
    clone(selector: NodeSelector<NodeSelectorType.Id>) {
      const targets = getNodesFromSelector(state.nodes, selector, {
        existOnly: true,
        idOnly: true,
      });

      targets.forEach(({ node }) => {
        invariant(!query.node(node.id).isTopLevelNode(), ERROR_CLONE_TOP_LEVEL_NODE);
        cloneNode(node.id, node.data.parent);
      });
    },

    deserialize(input: SerializedData | string) {
      const dehydratedData = typeof input == 'string' ? JSON.parse(input) : input;
      console.log('dehydratedData', dehydratedData);
      const dehydratedNodes = dehydratedData.nodes;
      const dehydratedPages = dehydratedData.pages;
      const dehydratedComponents = dehydratedData.components || [];
      const dehydratedTheme = dehydratedData.theme;
      const nodePairs = Object.keys(dehydratedNodes).map((id) => {
        let nodeId = id;

        if (id === DEPRECATED_ROOT_NODE) {
          nodeId = ROOT_NODE;
        }

        return [nodeId, query.parseSerializedNode(dehydratedNodes[id]).toNode((node) => (node.id = nodeId))];
      });

      this.replaceNodes(fromEntries(nodePairs));
      this.replacePageOptions(dehydratedPages, ROOT_PATH);
      this.replaceComponentOptions(dehydratedComponents, undefined);
      this.setTheme(dehydratedTheme);
    },

    addNewNodeWithSerializedData(input: SerializedNode | string, id) {
      const dehydratedNode = typeof input == 'string' ? JSON.parse(input) : input;

      const generatedNode = query.parseSerializedNode(dehydratedNode).toNode((node) => (node.id = id));

      this.replaceNodes({
        ...state.nodes,
        [id]: generatedNode,
      });

      if (!id.startsWith(ROOT_NODE)) this.addChildren(generatedNode.data.parent, id);
    },

    /**
     * Move a target Node to a new Parent at a given index
     * @param targetId
     * @param newParentId
     * @param index
     */
    move(selector: NodeSelector, newParentId: NodeId, index: number) {
      const targets = getNodesFromSelector(state.nodes, selector, {
        existOnly: true,
      });

      const newParent = state.nodes[newParentId];
      targets.forEach(({ node: targetNode }, i) => {
        const targetId = targetNode.id;
        const currentParentId = targetNode.data.parent;

        query.node(newParentId).isDroppable([targetId], (err) => {
          throw new Error(err);
        });

        const currentParent = state.nodes[currentParentId];
        const currentParentNodes = currentParent.data.nodes;

        currentParentNodes[currentParentNodes.indexOf(targetId)] = 'marked';

        newParent.data.nodes.splice(index + i, 0, targetId);

        state.nodes[targetId].data.parent = newParentId;
        currentParentNodes.splice(currentParentNodes.indexOf('marked'), 1);
      });
    },

    replaceNodes(nodes: Nodes) {
      this.clearEvents();
      state.nodes = nodes;
    },

    clearEvents() {
      this.setNodeEvent('selected', null);
      this.setNodeEvent('hovered', null);
      this.setNodeEvent('dragged', null);
      this.setIndicator(null);
    },

    /**
     * Resets all the editor state.
     */
    reset() {
      this.clearEvents();
      this.replaceNodes({});
    },

    /**
     * Set editor options via a callback function
     *
     * @param cb: function used to set the options.
     */
    setOptions(cb: (options: Partial<Options>) => void) {
      cb(state.options);
    },

    setNodeEvent(eventType: NodeEventTypes, nodeIdSelector: NodeSelector<NodeSelectorType.Id>) {
      state.events[eventType].forEach((id) => {
        if (state.nodes[id]) {
          state.nodes[id].events[eventType] = false;
        }
      });

      state.events[eventType] = new Set();

      if (!nodeIdSelector) {
        return;
      }

      const targets = getNodesFromSelector(state.nodes, nodeIdSelector, {
        idOnly: true,
        existOnly: true,
      });

      const nodeIds: Set<NodeId> = new Set(targets.map(({ node }) => node.id));
      nodeIds.forEach((id) => {
        state.nodes[id].events[eventType] = true;
      });
      state.events[eventType] = nodeIds;
    },

    /**
     * Set custom values to a Node
     * @param id
     * @param cb
     */
    setCustom<T extends NodeId>(
      selector: NodeSelector<NodeSelectorType.Id>,
      cb: (data: EditorState['nodes'][T]['data']['custom']) => void
    ) {
      const targets = getNodesFromSelector(state.nodes, selector, {
        idOnly: true,
        existOnly: true,
      });

      targets.forEach(({ node }) => cb(state.nodes[node.id].data.custom));
    },

    /**
     * Given a `id`, it will set the `dom` porperty of that node.
     *
     * @param id of the node we want to set
     * @param dom
     */
    setDOM(id: NodeId, dom: HTMLElement) {
      if (!state.nodes[id]) {
        return;
      }

      state.nodes[id].dom = dom;
    },

    setIndicator(indicator: Indicator | null) {
      if (
        indicator &&
        (!indicator.placement.parent.dom || (indicator.placement.currentNode && !indicator.placement.currentNode.dom))
      )
        return;
      state.indicator = indicator;
    },

    /**
     * Hide a Node
     * @param id
     * @param bool
     */
    setHidden(id: NodeId, bool: boolean) {
      state.nodes[id].data.hidden = bool;
    },

    /**
     * Update the props of a Node
     * @param id
     * @param cb
     */
    setProp(selector: NodeSelector<NodeSelectorType.Id>, cb: (props: any) => void) {
      const targets = getNodesFromSelector(state.nodes, selector, {
        idOnly: true,
        existOnly: true,
      });

      targets.forEach(({ node }) => cb(state.nodes[node.id].data.props));
    },

    selectNode(nodeIdSelector?: NodeSelector<NodeSelectorType.Id>) {
      if (nodeIdSelector) {
        const targets = getNodesFromSelector(state.nodes, nodeIdSelector, {
          idOnly: true,
          existOnly: true,
        });

        this.setNodeEvent(
          'selected',
          targets.map(({ node }) => node.id)
        );
      } else {
        this.setNodeEvent('selected', null);
      }

      this.setNodeEvent('hovered', null);
    },
    /**
     * Replace page options
     * @param id
     * @param page
     */
    replacePageOptions(pages: PageData[], currentPage: string) {
      state.pageOptions = {
        pages,
        currentPage,
      };
    },
    /**
     * Set page of a Node
     * @param id
     * @param page
     */
    setNodePage(id: NodeId, page: string) {
      state.nodes[id].data.page = page;
    },
    /**
     * Set current page for state
     * @param page
     */
    setCurrentPage(page: string) {
      state.pageOptions.currentPage = page;
    },
    /**
     * Set new list pages in pageOptions
     * @param pages
     */
    setListPage(pages: PageData[]) {
      state.pageOptions.pages = pages;
    },
    /**
     * Add new page includes path and name
     * @param page
     */
    addNewPage(page: PageData) {
      state.pageOptions.pages.push(page);
    },
    /**
     * Delete a page and all nodes in that page
     * @param removedPage: path of page to be deleted
     */
    deletePage(removedPage: string) {
      state.pageOptions.pages = state.pageOptions.pages.filter((pageData) => pageData.path !== removedPage);
      // change to new page if current page is deleted
      if (state.pageOptions.currentPage === removedPage) {
        state.pageOptions.currentPage = state.pageOptions.pages[0]?.path;
      }

      const curRootNodeId = getCurrentRootNodeIdPage(removedPage);
      // just delete root node, then it itself recursively deletes all children
      deleteNode(curRootNodeId);

    },
    // Component
    /**
     * Replace component options
     * @param id
     * @param component
     */
    replaceComponentOptions(components: ComponentData[], currentComponent: string) {
      state.componentOptions = {
        components,
        currentComponent,
      };
    },
    /**
     * Set component of a Node
     * @param id
     * @param component
     */
    setNodeComponent(id: NodeId, component: string) {
      state.nodes[id].data.component = component;
    },
    /**
     * Set current component for state
     * @param component
     */
    setCurrentComponent(component: string) {
      state.componentOptions.currentComponent = component;
    },
    /**
     * Set new list components in componentOptions
     * @param components
     */
    setListComponent(components: ComponentData[]) {
      state.componentOptions.components = components;
    },
    /**
     * Add new component includes instanceIds and name
     * @param component
     */
    addNewComponent(component: ComponentData) {
      state.componentOptions.components.push({ ...component, instanceIds: [] });
    },
    /**
     * Delete a component and all nodes in that component
     * @param removedComponent: instanceIds of component to be deleted
     */
    deleteComponent(removedComponent: string) {
      state.componentOptions.components = state.componentOptions.components.filter((componentData) => componentData.name !== removedComponent);
      // change to new component if current component is deleted
      if (state.componentOptions.currentComponent === removedComponent) {
        state.componentOptions.currentComponent = state.componentOptions.components[0]?.name;
      }

      const curRootNodeId = getCurrentRootNodeIdPage(removedComponent);
      // just delete root node, then it itself recursively deletes all children
      deleteNode(curRootNodeId);

    },

    /**
     * Update the events of a Node
     * @param id
     * @param cb
     */
    setEvent(selector: NodeSelector<NodeSelectorType.Id>, cb: (events: any) => void) {
      const targets = getNodesFromSelector(state.nodes, selector, {
        idOnly: true,
        existOnly: true,
      });

      targets.forEach(({ node }) => {
        if (!state.nodes[node.id].data.props.events) {
          state.nodes[node.id].data.props.events = {};
        }
        cb(state.nodes[node.id].data.props.events);
      });
    },
    /**
     * Add children to a node
     * @param id
     * @param childrenId
     */
    addChildren(id: NodeId, childrenId: NodeId) {
      state.nodes[id].data.nodes = [...state.nodes[id].data.nodes, childrenId];
    },

    /**
     * Set database
     * @param newDatase
     */
    setDatabase(newDatase) {
      const { documents, collections } = newDatase;
      const mappingDatabase = mappingDocumentsToCollections(collections, documents);
      state.database = {
        database: newDatase,
        mappingDatabase,
      };
    },

    /**
     * Set theme
     * @param newTheme
     */
    setTheme(newTheme) {
      state.theme = { ...newTheme };
    },

    /**
     * Remove all referenced nodeId from theme
     * @param nodeId
     */
    removeReferencedNodeFromTheme(nodeId: string) {
      const newTheme = cloneDeep(state.theme);
      Object.values(newTheme).forEach((themeItem) => {
        if (themeItem.refNodes?.[nodeId]) {
          delete themeItem.refNodes?.[nodeId];
        }
      });
      state.theme = newTheme;
    },

    /**
     * Remove all referenced propKey of nodeId from theme
     * @param nodeId
     * @param propKey
     */
    removeReferencedPropKeyOfNodeFromTheme(nodeId: string, propKey: string) {
      const newTheme = cloneDeep(state.theme);
      Object.values(newTheme).forEach((themeItem) => {
        if (themeItem.refNodes?.[nodeId]) {
          themeItem.refNodes[nodeId] = themeItem.refNodes?.[nodeId]?.filter((curPropKey) => curPropKey !== propKey);
        }
      });
      state.theme = newTheme;
    },
  };
};

export const ActionMethods = (state: EditorState, query: QueryCallbacksFor<typeof QueryMethods>) => {
  return {
    ...Methods(state, query),
    // Note: Beware: advanced method! You most likely don't need to use this
    // TODO: fix parameter types and cleanup the method
    setState(cb: (state: EditorState, actions: Delete<CallbacksFor<typeof Methods>, 'history'>) => void) {
      // @ts-ignore
      const { history, ...actions } = this;

      // We pass the other actions as the second parameter, so that devs could still make use of the predefined actions
      cb(state, actions);
    },
  };
};
