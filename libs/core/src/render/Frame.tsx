import { deprecationWarning, ROOT_NODE } from '@libs/utils';
import { getCurrentRootNodeId } from '@libs/core';
import React, { useEffect, useRef } from 'react';

import { useInternalEditor } from '../editor/useInternalEditor';
import { SerializedData } from '../interfaces';
import { NodeElement } from '../nodes/NodeElement';

export type Frame = {
  json?: string;
  data?: string | SerializedData;
  children?: React.ReactNode;
};

const RenderRootNode = () => {
  const { currentPageRootNodeId, timestamp } = useInternalEditor((state) => ({
    currentPageRootNodeId: getCurrentRootNodeId(state.pageOptions.currentPage),
    timestamp:
      state.nodes[getCurrentRootNodeId(state.pageOptions.currentPage)] &&
      state.nodes[getCurrentRootNodeId(state.pageOptions.currentPage)]._hydrationTimestamp,
  }));

  if (!timestamp) {
    return null;
  }

  return <NodeElement id={currentPageRootNodeId} key={timestamp} />;
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
