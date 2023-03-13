import { useEditor } from 'libs/core/src';
import React from 'react';

export * from './setting/ToolbarPropItem';
export * from './setting/ToolbarPropSection';
export * from './ToolbarTextInput';
export * from './ToolbarDropdown';

export const Toolbar = ({ type = "settings" }) => {
  const { active, related } = useEditor((state, query) => {
    // TODO: handle multiple selected elements
    const currentlySelectedNodeId = query.getEvent('selected').first();
    return {
      active: currentlySelectedNodeId,
      related:
        currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });
  const actionText = {
    settings: 'editing',
    events: 'adding events',
  }
  return (
    <div className="py-1 h-full">
      {active && related[type] && React.createElement(related[type])}
      {!active && (
        <div
          className="px-5 py-2 flex flex-col items-center h-full justify-center text-center"
          style={{
            color: '#fff',
            fontSize: '11px',
          }}
        >
          <h2 className="pb-1 text-primary text-sm">Click on a component to start {actionText[type]}.</h2>
        </div>
      )}
    </div>
  );
};
