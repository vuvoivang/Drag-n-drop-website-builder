import { Element, useNode } from 'libs/core/src';
import React from 'react';

import { CraftContainer } from '../Container';
import { CraftVideo } from '../Video';

export const Custom2VideoDrop = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="flex-1 ml-5 h-full">
      {children}
    </div>
  );
};
Custom2VideoDrop.craft = {
  rules: {
    canMoveIn: (nodes, self, helper) => {
      return (
        nodes.every((node) => node.data.type === CraftVideo) &&
        helper(self.id).decendants().length === 0
      );
    },
  },
};
export const Custom2 = (props: any) => {
  return (
    <CraftContainer {...props} className="overflow-hidden">
      <div className="w-24">
        <h2 className="text-xs text-white">
          You can only drop
          <br />
          one video here.
        </h2>
      </div>
      <Element canvas is={Custom2VideoDrop} id="wow">
        <CraftVideo />
      </Element>
    </CraftContainer>
  );
};

Custom2.craft = {
  ...CraftContainer.craft,
  displayName: 'Custom 2',
};
