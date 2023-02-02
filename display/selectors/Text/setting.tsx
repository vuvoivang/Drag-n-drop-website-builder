import React from "react";

import {
  ConfigSetting,
  renderToolbarSection,
} from "../../setting/RenderSetting";

const configSetting: ConfigSetting = {
  sections: ["typography", "margin", "appearanceText"],
};

export const TextSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
