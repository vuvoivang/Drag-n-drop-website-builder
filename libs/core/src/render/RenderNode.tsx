import React from 'react';

import { DefaultRender } from './DefaultRender';

import { useInternalEditor } from '../editor/useInternalEditor';
import { useInternalNode } from '../nodes/useInternalNode';
import { getCurrentRootNodeIdComponent, getCurrentRootNodeIdPage } from '../utils/getCurrentPageRootNodeId';

type RenderNodeToElementType = {
  render?: React.ReactElement;
};
export const RenderNodeToElement: React.FC<RenderNodeToElementType> = ({ render }) => {
  const { id, hidden, page, belongToComponent } = useInternalNode((node) => ({
    id: node.id,
    hidden: node.data.hidden,
    page: node.data.page,
    belongToComponent: node.data.belongToComponent,
  }));

  const { onRender, currentPage, isInPage, currentComponent } = useInternalEditor((state, query) => ({
    onRender: state.options.onRender,
    currentPage: state.pageOptions.currentPage,
    currentComponent: state.componentOptions.currentComponent,
    isInPage: query.isInPage(),
  }));
  const currentPageRootNodeId = getCurrentRootNodeIdPage(currentPage);
  const currentComponentRootNodeId = getCurrentRootNodeIdComponent(currentComponent);

  // don't display the node since it's hidden

  console.log(currentComponentRootNodeId, isInPage, id);

  // except current root, case page, check show
  if ((isInPage && id !== currentPageRootNodeId)
    && (hidden || page !== currentPage)) {
    return null;
  }

  // except current root, case component, check show
  // node with page & belongToComponent => show in page
  // node with only belongToComponent => show in component
  // Only node root component => have both belongToComponent & component
  if ((!isInPage && id !== currentComponentRootNodeId)
    && (hidden || page || belongToComponent !== currentComponent)) {
    return null;
  }

  return React.createElement(onRender, { render: render || <DefaultRender /> });
};
