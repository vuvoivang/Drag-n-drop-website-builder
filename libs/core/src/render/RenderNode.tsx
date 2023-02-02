import React from 'react';

import { DefaultRender } from './DefaultRender';

import { useInternalEditor } from '../editor/useInternalEditor';
import { useInternalNode } from '../nodes/useInternalNode';
import { ROOT_NODE } from 'libs/utils/src';

type RenderNodeToElementType = {
  render?: React.ReactElement;
};
export const RenderNodeToElement: React.FC<RenderNodeToElementType> = ({
  render,
}) => {
  const { id, hidden, page } = useInternalNode((node) => ({
    id: node.id,
    hidden: node.data.hidden,
    page: node.data.page
  }));

  const { onRender, currentPage } = useInternalEditor((state) => ({
    onRender: state.options.onRender,
    currentPage: state.pageOptions.currentPage
  }));
  // don't display the node since it's hidden
  if (id !== ROOT_NODE && (hidden || page !== currentPage)) {
    return null;
  }

  return React.createElement(onRender, { render: render || <DefaultRender /> });
};
