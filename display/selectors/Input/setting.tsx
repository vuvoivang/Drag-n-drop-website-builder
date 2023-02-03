import React from "react";

import {
  ConfigSetting,
  renderToolbarSection,
} from "../../setting/RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
    "type",
    "placeholder",
    "inputColors",
    "inputOptions",
    "typography",
    "inputDecoration",
    "dimensions",
    "padding",
    "margin",
  ],
};

export const InputSetting = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
