import { ConfigEvent, renderToolbarSection } from 'display/event/RenderEvent';
import React from 'react';

const configEvent: ConfigEvent = {
  sections: ['clickTypeAnchor', 'scrollTo', 'navigate'],
};

export const AnchorEvents = () => {
  return <React.Fragment>{renderToolbarSection(configEvent)}</React.Fragment>;
};
