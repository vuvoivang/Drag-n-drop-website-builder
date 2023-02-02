import React from "react";
import { capitalize, weightDescription } from "utils/text";

import { ToolbarRadio } from "../../editor/Toolbar/ToolbarRadio";
import { ConfigSetting, renderToolbarSection } from "../RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
    {
      title: "Typography",
      props: ["fontSize", "fontWeight", "textAlign"],
      summary: ({ fontSize, fontWeight, textAlign }: any) => {
        return `${fontSize || ""}, ${weightDescription(
          fontWeight
        )}, ${capitalize(textAlign)}`;
      },
      items: [
        {
          propKey: "fontSize",
          type: "slider",
          label: "Font Size",
          full: true,
        },
        {
          propKey: "textAlign",
          type: "radio",
          label: "Align",
          children: (
            <>
              <ToolbarRadio value="left" label="Left" />
              <ToolbarRadio value="center" label="Center" />
              <ToolbarRadio value="right" label="Right" />
            </>
          ),
        },
        {
          propKey: "fontWeight",
          type: "radio",
          label: "Weight",
          children: (
            <>
              <ToolbarRadio value="400" label="Regular" />
              <ToolbarRadio value="500" label="Medium" />
              <ToolbarRadio value="700" label="Bold" />
            </>
          ),
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
      title: "Appearance",
      props: ["color", "shadow"],
      summary: ({ color, shadow }: any) => {
        return (
          <div className="fletext-right">
            <p
              style={{
                color: color && `rgba(${Object.values(color)})`,
                textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
              }}
              className="text-white text-right"
            >
              T
            </p>
          </div>
        );
      },
      items: [
        {
          propKey: "color",
          type: "color",
          label: "Text",
          full: true,
        },
        {
          propKey: "shadow",
          type: "slider",
          label: "Shadow",
          full: true,
        },
      ],
    },
  ],
};

export const TextSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
