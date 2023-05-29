import { ROOT_NODE } from '@libs/utils';
import React from 'react';

import { LayerOptions } from './interfaces';
import { LayerContextProvider } from './layers/LayerContextProvider';
import { LayerManagerProvider } from './manager/LayerManagerProvider';
import { useEditor } from '@libs/hooks';
export { useLayer } from './layers';

export const Layers: React.FC<Partial<LayerOptions>> = ({ ...options }) => {
  const { currentPage } = useEditor((state) => ({
    currentPage: state.pageOptions.currentPage,
  }));
  const rootNodeIdThisPage = currentPage.length > 1 ? `ROOT_${currentPage.slice(1)}` : `ROOT`;
  return (
    <LayerManagerProvider options={options}>
      <LayerContextProvider id={rootNodeIdThisPage} depth={0} />
    </LayerManagerProvider>
  );
};
