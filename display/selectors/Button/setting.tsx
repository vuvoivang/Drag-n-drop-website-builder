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
    {
      title: "Padding",
      props: ["padding"],
      summary: ({ padding }: any) => {
        return `${padding[0] || 0}px ${padding[1] || 0}px ${padding[2] || 0}px ${
          padding[3] || 0
        }px`;
      },
      items: [
        {
          propKey: "padding",
          type: ["slider", "text"],
          label: "Top",
          index: 0,
          full: true,
          styledCustomOptions: [{
            value: "pt-2",
            label: "Tiny",
          },{
            value: "pt-4",
            label: "Medium",
          }],
        },
        {
          propKey: "padding",
          type: "slider",
          label: "Right",
          index: 1,
          full: true,
          styledCustomOptions: [{
            value: "pr-2",
            label: "Tiny",
          },{
            value: "pr-4",
            label: "Medium",
          }],
        },
        {
          propKey: "padding",
          type: "slider",
          label: "Bottom",
          index: 2,
          full: true,
          styledCustomOptions: [{
            value: "pb-2",
            label: "Tiny",
          },{
            value: "pb-4",
            label: "Medium",
          }],
        },
        {
          propKey: "padding",
          type: "slider",
          label: "Left",
          index: 3,
          full: true,
          styledCustomOptions: [{
            value: "pl-2",
            label: "Tiny",
          },{
            value: "pl-4",
            label: "Medium",
          }],
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
          styledCustomOptions: [{
            value: "mt-2",
            label: "Tiny",
          },{
            value: "mt-4",
            label: "Medium",
          }],
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Right",
          index: 1,
          full: true,
          styledCustomOptions: [{
            value: "mr-2",
            label: "Tiny",
          },{
            value: "mr-4",
            label: "Medium",
          }],
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Bottom",
          index: 2,
          full: true,
          styledCustomOptions: [{
            value: "mb-2",
            label: "Tiny",
          },{
            value: "mb-4",
            label: "Medium",
          }],
        },
        {
          propKey: "margin",
          type: "slider",
          label: "Left",
          index: 3,
          full: true,
          styledCustomOptions: [{
            value: "ml-2",
            label: "Tiny",
          },{
            value: "ml-4",
            label: "Medium",
          }],
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
          radioChildren: [{
            value: "full",
            label: "Full",
          },{
            value: "outline",
            label: "Outline",
          }],
        },
      ],
    },

  ],
};

export const ButtonSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
