import { ConfigEvent, renderToolbarSection } from 'display/event/RenderEvent';
import React from 'react';

const configEvent: ConfigEvent = {
  sections: ['showPopup'],
};

export const PopupEvents = () => {
  return <React.Fragment>{renderToolbarSection(configEvent)}</React.Fragment>;
};
