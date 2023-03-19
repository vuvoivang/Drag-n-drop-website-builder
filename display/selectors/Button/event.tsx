import { ConfigEvent, renderToolbarSection } from 'display/event/RenderEvent';
import React from 'react';

const configEvent: ConfigEvent = {
  sections: ['clickTypeButton', 'navigate', 'popup'],
};

export const ButtonEvents = () => {
  return <React.Fragment>{renderToolbarSection(configEvent)}</React.Fragment>;
};
