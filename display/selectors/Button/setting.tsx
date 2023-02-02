import React from "react";

import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { ConfigSetting, renderToolbarSection } from "../RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
    {
      title: "Colors",
      props: ["background", "color"],
      summary: ({ background, color }: any) => {
        return (
          <div className="flex flex-row-reverse">
            <div
              style={{
                background: background && `rgba(${Object.values(background)})`,
              }}
              className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-dark"
            >
              <p
                style={{
                  color: color && `rgba(${Object.values(color)})`,
                }}
                className="text-white w-full text-center"
              >
                T
              </p>
            </div>
          </div>
        );
      },
      items: [
        {
          propKey: "background",
          type: "bg",
          label: "Background",
          full: true,
        },
        {
          propKey: "color",
          type: "color",
          label: "Text",
          full: true,
        },
      ],
    },
    {
      title: "Margin",
      props: ["margin"],
      summary: ({ margin }: any) => {
        return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
          margin[3] || 0
        }px`;
      },
      items: [
        {
          propKey: "margin",
          type: "slider",
          label: "Top",
          index: 0,
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Right",
          index: 1,
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Bottom",
          index: 2,
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Left",
          index: 3,
        },
      ],
    },
    {
      title: "Decoration",
      items: [
        {
          propKey: "buttonStyle",
          type: "radio",
          label: "Style",
          children: (
            <>
              <ToolbarRadio value="full" label="Full" />
              <ToolbarRadio value="outline" label="Outline" />
            </>
          ),
        },
      ],
    },
  ],
};

export const ButtonSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
