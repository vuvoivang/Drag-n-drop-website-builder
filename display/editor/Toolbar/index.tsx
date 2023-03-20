import { useEditor } from 'libs/core/src';
import React from 'react';

export * from './setting/ToolbarPropItem';
export * from './setting/ToolbarPropSection';
export * from './ToolbarTextInput';
export * from './ToolbarDropdown';
import _var from '../../styles/common/_var.module.scss';

export const Toolbar = ({ type = 'settings' }) => {
  const { active, related } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const currentlySelectedNodeId = query.getEvent('selected').first();
    return {
      active: currentlySelectedNodeId,
      related: currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });
  const actionText = {
    settings: 'editing',
    events: 'adding events',
  };
  return (
    <div className='py-1 h-full'>
      {active && related[type] && React.createElement(related[type])}
      {!active && (
        <div
          className='flex flex-col items-center h-full justify-center text-center'
          style={{
            color: _var.primaryColor,
            fontSize: '14px',
            paddingBottom: '150px',
          }}
        >
          Click on a component to start {actionText[type]}.
        </div>
      )}
    </div>
  );
};
