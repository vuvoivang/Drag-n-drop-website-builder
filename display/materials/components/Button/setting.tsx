import React from "react";

import {
  ConfigSetting,
  renderToolbarSection,
} from "../../../setting/RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
    "typography",
    "colors",
    "dimensions",
    "padding",
    {
      section: "margin",
      items: [
        {
          propKey: "margin",
          index: 0,
        },
        {
          propKey: "margin",
          index: 1,
        },
        {
          propKey: "margin",
          type: ["slider", "text"],
          index: 2,
        },
        {
          propKey: "margin",
          index: 3,
        },
      ],
    },
    "buttonDecoration",
  ],
};

export const ButtonSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
