import { ConfigEvent, renderToolbarSection } from "display/event/RenderEvent";
import React from "react";

const configEvent: ConfigEvent = {
  sections: [
    "scrollTo",
    "navigate",
    "clickTypeAnchor",
  ],
};

export const AnchorEvents = () => {
  return <React.Fragment>{renderToolbarSection(configEvent)}</React.Fragment>;
};
