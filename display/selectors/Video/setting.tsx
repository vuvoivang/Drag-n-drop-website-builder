import React from "react";

import { ConfigSetting, renderToolbarSection } from "../RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
    {
      title: "Youtube",
      items: [
        {
          propKey: "videoId",
          type: "text",
          label: "Video ID",
          full: true,
        },
      ],
    },
  ],
};

export const VideoSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
