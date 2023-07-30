import { deprecationWarning, ROOT_NODE } from '@libs/utils';
import { getCurrentRootNodeIdPage, getCurrentRootNodeIdComponent } from '@libs/core';
import React, { useEffect, useRef } from 'react';

import { useInternalEditor } from '../editor/useInternalEditor';
import { SerializedData } from '../interfaces';
import { NodeElement } from '../nodes/NodeElement';

export type Frame = {
  json?: string;
  data?: string | SerializedData;
  children?: React.ReactNode;
};

export const getCurrentRootNodeId = (state, isInPage) => {
  return isInPage ? getCurrentRootNodeIdPage(state.pageOptions.currentPage) : getCurrentRootNodeIdComponent(state.componentOptions.currentComponent)
}


const getCurrentRootNodeHydrationTimestamp = (state, isInPage) => {
  const currentRootNodeId = getCurrentRootNodeId(state, isInPage);
  return state.nodes[currentRootNodeId] &&
  state.nodes[currentRootNodeId]._hydrationTimestamp;
}

const RenderRootNode = () => {
  const { currentRootNodeId, timestamp } = useInternalEditor((state, query) => ({
    currentRootNodeId: getCurrentRootNodeId(state,query.isInPage()),
    timestamp:
    getCurrentRootNodeHydrationTimestamp(state,query.isInPage()),
  }));
  console.log("hello",currentRootNodeId);

  if (!timestamp) {
    return null;
  }

  return <NodeElement id={currentRootNodeId} key={timestamp} />;
};

/**
 * A React Component that defines the editable area
 */
export const Frame: React.FC<Frame> = ({ children, json, data }) => {
  const { actions, query } = useInternalEditor();

  if (!!json) {
    deprecationWarning('<Frame json={...} />', {
      suggest: '<Frame data={...} />',
    });
  }

  const initialState = useRef({
    initialChildren: children,
    initialData: data || json,
  });

  useEffect(() => {
    const { initialChildren, initialData } = initialState.current;

    if (initialData) {
      actions.history.ignore().deserialize(initialData);
    } else if (initialChildren) {
      const rootNode = React.Children.only(initialChildren) as React.ReactElement;

      const node = query.parseReactElement(rootNode).toNodeTree((node, jsx) => {
        if (jsx === rootNode) {
          node.id = ROOT_NODE;
        }
        return node;
      });

      actions.history.ignore().addNodeTree(node);
    }
  }, [actions, query]);

  return <RenderRootNode />;
};
