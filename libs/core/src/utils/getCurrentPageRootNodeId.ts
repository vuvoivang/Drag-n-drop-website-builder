import { ROOT_NODE } from 'libs/utils/src';

export const getCurrentRootNodeId = (currentPage) => {
  return currentPage.length > 1 ? `${ROOT_NODE}_${currentPage.slice(1)}` : ROOT_NODE;
};
