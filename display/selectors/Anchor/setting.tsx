import React from "react";

import {
  ConfigSetting,
  renderToolbarSection,
} from "../../setting/RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
    "typography",
    "colors",
    "dimensions",
    "padding",
    "margin",
    "buttonDecoration",
  ],
};

export const AnchorSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
