import React from 'react';

import { LayerOptions } from './interfaces';
import { LayerContextProvider } from './layers/LayerContextProvider';
import { LayerManagerProvider } from './manager/LayerManagerProvider';
import { useEditor } from '@libs/hooks';
import { getCurrentRootNodeId } from '@libs/render';
export { useLayer } from './layers';

export const Layers: React.FC<Partial<LayerOptions>> = ({ ...options }) => {
  const { currentRootNodeId } = useEditor((state, query) => ({
    currentRootNodeId: getCurrentRootNodeId(state,query.isInPage()),
  }));
  return (
    // @ts-ignore
    <LayerManagerProvider options={options}>
      <LayerContextProvider id={currentRootNodeId} depth={0} />
    </LayerManagerProvider>
  );
};
