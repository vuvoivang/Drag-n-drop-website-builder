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
    {
      title: "Dimensions",
      props: ["width", "height"],
      summary: ({ width, height }: any) => {
        return `${width || 0} x ${height || 0}`;
      },
      items: [
        {
          propKey: "width",
          type: "text",
          label: "Width",
        },
        {
          propKey: "height",
          type: "text",
          label: "Height",
        },
      ],
    },
  ],
};

export const VideoSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
