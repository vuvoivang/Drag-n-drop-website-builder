import React from "react";

import {
  ConfigSetting,
  renderToolbarSection,
} from "../../setting/RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
    {
      section: "typography",
      title: "Popup title",
      summary: undefined,
      items: [
        {
          propKey: "tagName",
          nestedPropKey: "titleComponent",
        },
        {
          propKey: "fontSize",
          nestedPropKey: "titleComponent",
        },
        {
          propKey: "textAlign",
          nestedPropKey: "titleComponent",
        },
        {
          propKey: "fontWeight",
          nestedPropKey: "titleComponent",
        },
      ],
    },
    {
      section: "typography",
      title: "Popup content",
      summary: undefined,
      items: [
        {
          propKey: "tagName",
          nestedPropKey: "contentComponent",
        },
        {
          propKey: "fontSize",
          nestedPropKey: "contentComponent",
        },
        {
          propKey: "textAlign",
          nestedPropKey: "contentComponent",
        },
        {
          propKey: "fontWeight",
          nestedPropKey: "contentComponent",
        },
      ],
    },
    {
      section: "buttonPopup",
      title: "First button",
      summary: undefined,
      items: [
        {
          propKey: "background",
          nestedPropKey: "firstButtonComponent",
        },
        {
          propKey: "color",
          nestedPropKey: "firstButtonComponent",
        },
        {
          propKey: "buttonStyle",
          nestedPropKey: "firstButtonComponent",
        },
      ],
    },
    {
      section: "buttonPopup",
      title: "Second button",
      summary: undefined,
      items: [
        {
          propKey: "background",
          nestedPropKey: "secondButtonComponent",
        },
        {
          propKey: "color",
          nestedPropKey: "secondButtonComponent",
        },
        {
          propKey: "buttonStyle",
          nestedPropKey: "secondButtonComponent",
        },
      ],
    },
  ],
};

export const PopupSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
