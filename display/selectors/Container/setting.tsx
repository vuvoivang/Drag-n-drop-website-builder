import React from "react";

import { ConfigSetting, renderToolbarSection } from "../RenderSetting";

const configSetting: ConfigSetting = {
  sections: [
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
      title: "Padding",
      props: ["padding"],
      summary: ({ padding }: any) => {
        return `${padding[0] || 0}px ${padding[1] || 0}px ${
          padding[2] || 0
        }px ${padding[3] || 0}px`;
      },
      items: [
        {
          propKey: "padding",
          type: "slider",
          label: "Top",
          index: 0,
        },
        {
          propKey: "padding",
          type: "slider",
          label: "Right",
          index: 1,
        },
        {
          propKey: "padding",
          type: "slider",
          label: "Bottom",
          index: 2,
        },
        {
          propKey: "padding",
          type: "slider",
          label: "Left",
          index: 3,
        },
      ],
    },
    {
      title: "Decoration",
      props: ["radius", "shadow"],
      items: [
        {
          propKey: "radius",
          type: "slider",
          label: "Radius",
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
    {
      title: "Alignment",
      items: [
        {
          propKey: "flexDirection",
          type: "radio",
          label: "Flex Direction",
          radioChildren: [
            {
              value: "row",
              label: "Row",
            },
            {
              value: "column",
              label: "Column",
            },
          ],
        },
        {
          propKey: "fillSpace",
          type: "radio",
          label: "Fill space",
          radioChildren: [
            {
              value: "yes",
              label: "Yes",
            },
            {
              value: "no",
              label: "No",
            },
          ],
        },
        {
          propKey: "alignItems",
          type: "radio",
          label: "Align Items",
          radioChildren: [
            {
              value: "flex-start",
              label: "Flex start",
            },
            {
              value: "center",
              label: "Center",
            },
            {
              value: "flex-end",
              label: "Flex end",
            },
          ],
        },
      ],
    },
  ],
};

export const ContainerSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
