import { ROOT_NODE } from 'libs/utils/src';

export const getCurrentRootNodeIdPage = (currentPage) => {
  return currentPage?.length > 1 ? `${ROOT_NODE}_${currentPage.slice(1)}` : ROOT_NODE;
};

export const getCurrentRootNodeIdComponent = (currentComponent) => {
  return currentComponent ? `${ROOT_NODE}_C_${currentComponent}` : null;
};
