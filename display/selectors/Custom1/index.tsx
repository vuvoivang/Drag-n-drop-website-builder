import { Element, useNode } from 'libs/core/src';
import React from 'react';

import { CraftButton } from '../Button';
import { CraftContainer } from '../Container';

export const OnlyButtons = ({ children, ...props }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div title='only-buttons' ref={connect} className='w-full mt-5' {...props}>
      {children}
    </div>
  );
};

OnlyButtons.craft = {
  rules: {
    canMoveIn: (nodes) => nodes.every((node) => node.data.type === CraftButton),
  },
};

export const Custom1 = (props: any) => {
  return (
    <CraftContainer {...props}>
      <h2 className='text-lg px-10 py-5 text-white'>
        I'm a component that only accepts
        <br /> buttons.
      </h2>
      <Element canvas id='wow' is={OnlyButtons}>
        <CraftButton />
        <CraftButton buttonStyle='outline' color={{ r: 255, g: 255, b: 255, a: 1 }} />
      </Element>
    </CraftContainer>
  );
};

Custom1.craft = {
  ...CraftContainer.craft,
  displayName: 'Custom 1',
};
