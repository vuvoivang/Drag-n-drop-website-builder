import React from "react";
import { capitalize, weightDescription } from "utils/text";

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
          type: ["slider", "text", "select"],
          label: "Font Size",
          full: true,
          selectChildren: [
            {
              value: "14",
              label: "14px",
            },
            {
              value: "16",
              label: "16px",
            },
            {
              value: "18",
              label: "18px",
            },
          ],
        },
        {
          propKey: "textAlign",
          type: "radio",
          label: "Align",
          radioChildren: [
            {
              value: "left",
              label: "Left",
            },
            {
              value: "center",
              label: "Center",
            },
            {
              value: "right",
              label: "Right",
            },
          ],
        },
        {
          propKey: "fontWeight",
          type: "radio",
          label: "Weight",
          radioChildren: [
            {
              value: "400",
              label: "Regular",
            },
            {
              value: "500",
              label: "Medium",
            },
            {
              value: "700",
              label: "Bold",
            },
          ],
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
          type: ["slider", "text"],
          label: "Top",
          index: 0,
          full: true,
          styledCustomOptions: [
            {
              value: "mt-2",
              label: "Tiny",
            },
            {
              value: "mt-4",
              label: "Medium",
            },
          ],
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Right",
          index: 1,
          full: true,
          styledCustomOptions: [
            {
              value: "mr-2",
              label: "Tiny",
            },
            {
              value: "mr-4",
              label: "Medium",
            },
          ],
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Bottom",
          index: 2,
          full: true,
          styledCustomOptions: [
            {
              value: "mb-2",
              label: "Tiny",
            },
            {
              value: "mb-4",
              label: "Medium",
            },
          ],
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Left",
          index: 3,
          full: true,
          styledCustomOptions: [
            {
              value: "ml-2",
              label: "Tiny",
            },
            {
              value: "ml-4",
              label: "Medium",
            },
          ],
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
