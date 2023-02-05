import { Element, useEditor } from "libs/core/src";
import { Tooltip } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import ButtonSvg from "../../../public/icons/toolbox/button.svg";
import SquareSvg from "../../../public/icons/toolbox/rectangle.svg";
import TypeSvg from "../../../public/icons/toolbox/text.svg";
import YoutubeSvg from "../../../public/icons/toolbox/video-line.svg";
import ImageSvg from "../../../public/icons/toolbox/image.svg";
import InputSvg from "../../../public/icons/toolbox/input.svg";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

import {
  CraftButton,
  CraftContainer,
  CraftText,
  CraftVideo,
  CraftInput,
  CraftImage,
} from "display/selectors";

import {
  Container,
  Button,
  Text,
  Image,
  Video,
  Input,
} from "display/raw-components";

const newProps = {
  background: { r: 22, g: 163, b: 74, a: 0.5 },
};

type Theme = "light" | "dark";

const themes = {
  light: {
    sidebar: {
      backgroundColor: "#ffffff",
      color: "#607489",
    },
    menu: {
      menuContent: "#fbfcfd",
      icon: "#079512",
      hover: {
        backgroundColor: "#c5e4ff",
        color: "#44596e",
      },
      disabled: {
        color: "#9fb6cf",
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: "#0b2948",
      color: "#8ba1b7",
    },
    menu: {
      menuContent: "#082440",
      icon: "#ffffff",
      hover: {
        backgroundColor: "#00458b",
        color: "#b6c8d9",
      },
      disabled: {
        color: "#3e5e7e",
      },
    },
  },
};

const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const menuClasses = {
  root: "ps-menu-root",
  menuItemRoot: "ps-menuitem-root",
  subMenuRoot: "ps-submenu-root",
  button: "ps-menu-button",
  prefix: "ps-menu-prefix",
  suffix: "ps-menu-suffix",
  label: "ps-menu-label",
  icon: "ps-menu-icon",
  subMenuContent: "ps-submenu-content",
  SubMenuExpandIcon: "ps-submenu-expand-icon",
  disabled: "ps-disabled",
  active: "ps-active",
  open: "ps-open",
};
export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  const [theme, setTheme] = React.useState<Theme>("light");

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      // @ts-ignore
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      marginRight: 7,
      "svg": {
        width: "100%",
        height: "100%",
        fill: "currentColor",
      }
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, !collapsed ? 0.4 : 1)
          : "transparent",
    }),
    button: ({ level }) => {
      // @ts-ignore
      if (level === 0) {
        return {
          [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
          },
          "&:hover": {
            backgroundColor: hexToRgba(
              themes[theme].menu.hover.backgroundColor,
              1
            ),
            color: themes[theme].menu.hover.color,
          },
        }
      } else return {
        [`&.${menuClasses.disabled}`]: {
          color: themes[theme].menu.disabled.color,
        },
        "&:hover": {
          backgroundColor: "transparent",
          color: themes[theme].menu.hover.color,
        },
      }
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    // <ToolboxDiv
    //   enabled={enabled && enabled}
    //   className="toolbox transition w-32 h-full flex flex-col bg-dark"
    // >
    //   <div className="flex flex-1 flex-col pt-3">
    //     <div
    //       ref={(ref) =>
    //         create(
    //           ref,
    //           <Element
    //             canvas
    //             is={CraftContainer}
    //             background={{ r: 78, g: 78, b: 78, a: 1 }}
    //             color={{ r: 0, g: 0, b: 0, a: 1 }}
    //             height="300px"
    //             width="300px"
    //           ></Element>
    //         )
    //       }
    //     >
    //       <div className="p-2 my-5 text-white fs-md letter-spacing-1 fw-large">
    //         Components
    //       </div>
    //       <Tooltip title="Container" placement="right">
    //         <Item className="m-2 pb-2 cursor-pointer block" move>
    //           <SquareSvg />
    //           <p>Container</p>
    //         </Item>
    //       </Tooltip>
    //     </div>
    //     <div
    //       ref={(ref) =>
    //         create(
    //           ref,
    //           <CraftText fontSize="12" textAlign="left" text="Hi there" />
    //         )
    //       }
    //     >
    //       <Tooltip title="Text" placement="right">
    //         <Item className="m-2 pb-2 cursor-pointer block" move>
    //           <TypeSvg />
    //           <p>Text</p>
    //         </Item>
    //       </Tooltip>
    //     </div>
    //     <div ref={(ref) => create(ref, <CraftButton />)}>
    //       <Tooltip title="Button" placement="right">
    //         <Item className="m-2 pb-2 cursor-pointer block" move>
    //           <ButtonSvg />
    //           <p>Button</p>
    //         </Item>
    //       </Tooltip>
    //     </div>
    //     <div ref={(ref) => create(ref, <CraftImage />)}>
    //       <Tooltip title="Image" placement="right">
    //         <Item className="m-2 pb-2 cursor-pointer block" move>
    //           <ImageSvg />
    //           <p>Image</p>
    //         </Item>
    //       </Tooltip>
    //     </div>
    //     <div ref={(ref) => create(ref, <CraftInput />)}>
    //       <Tooltip title="Image" placement="right">
    //         <Item className="m-2 pb-2 cursor-pointer block" move>
    //           <InputSvg />
    //           <p>Input</p>
    //         </Item>
    //       </Tooltip>
    //     </div>
    //     <div ref={(ref) => create(ref, <CraftVideo />)}>
    //       <Tooltip title="Video" placement="right">
    //         <Item className="m-2 pb-2 cursor-pointer block" move>
    //           <YoutubeSvg />
    //           <p>Video</p>
    //         </Item>
    //       </Tooltip>
    //     </div>

    //     {/* <div ref={(ref) => create(ref, <CraftButton />)}>
    //       <Button className="cursor-move"></Button>
    //     </div>

    //     <div ref={(ref) => create(ref, <CraftButton {...newProps} />)}>
    //       <Button {...newProps} className="cursor-move"></Button>
    //     </div>

    //     <div
    //       ref={(ref) =>
    //         create(
    //           ref,
    //           <Element
    //             canvas
    //             is={CraftContainer}
    //             background={{ r: 78, g: 78, b: 78, a: 1 }}
    //             color={{ r: 0, g: 0, b: 0, a: 1 }}
    //             height="300px"
    //             width="300px"
    //           ></Element>
    //         )
    //       }
    //     >
    //       <Container
    //         className="cursor-move"
    //         background={{ r: 78, g: 78, b: 78, a: 1 }}
    //         color={{ r: 0, g: 0, b: 0, a: 1 }}
    //         width="100px"
    //         height="50px"
    //       ></Container>
    //     </div>

    //     <div ref={(ref) => create(ref, <CraftText />)}>
    //       <Text className="cursor-move"></Text>
    //     </div>

    //     <div ref={(ref) => create(ref, <CraftImage />)}>
    //       <Image className="cursor-move"></Image>
    //     </div> */}

    //     <div
    //       ref={(ref) =>
    //         create(
    //           ref,
    //           <Element
    //             canvas
    //             is={CraftContainer}
    //             background={{ r: 78, g: 78, b: 78, a: 1 }}
    //             color={{ r: 0, g: 0, b: 0, a: 1 }}
    //             height="300px"
    //             width="300px"
    //           ></Element>
    //         )
    //       }
    //     >
    //       <Container
    //         className="cursor-move"
    //         background={{ r: 78, g: 78, b: 78, a: 1 }}
    //         color={{ r: 0, g: 0, b: 0, a: 1 }}
    //         width="100px"
    //         height="50px"
    //       ></Container>
    //     </div>
    //     <div className="cursor-move" ref={(ref) => create(ref, <CraftVideo />)}>
    //       <Video className="cursor-move" enabled={true} />
    //     </div>

    // <div ref={(ref) => create(ref, <CraftInput />)}>
    //   <Input
    //     className="cursor-move"
    //     width="100px"
    //     color={{ r: 0, g: 0, b: 0, a: 1 }}
    //     inputOptions={{ readonly: true }}
    //   />
    // </div>
    //   </div>
    // </ToolboxDiv>
    <div
      style={{
        display: "flex",
        height: "100%",
        direction: "ltr",
      }}
    >
      <Sidebar
        breakPoint="lg"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        {/* @ts-ignore  */}
        <Menu menuItemStyles={menuItemStyles}>
          <SubMenu label="Text" icon={<TypeSvg style={{fill: "currentColor", width: "100%", height: "100%"}} />}>
            <MenuItem> Pie charts</MenuItem>
            <MenuItem> Line charts</MenuItem>
            <MenuItem> Bar charts</MenuItem>
          </SubMenu>
          <SubMenu label="Button" icon={<ButtonSvg />}>
            <MenuItem> Google maps</MenuItem>
            <MenuItem> Open street maps</MenuItem>
          </SubMenu>
          <SubMenu label="Container" icon={<SquareSvg />}>
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu>
          <SubMenu label="Image" icon={<ImageSvg />}></SubMenu>
          <SubMenu label="Input" icon={<YoutubeSvg />}>
            <MenuItem>
              {" "}
              <div ref={(ref) => create(ref, <CraftInput />)}>
                <Input
                  className="cursor-move"
                  width="100px"
                  color={{ r: 0, g: 0, b: 0, a: 1 }}
                  inputOptions={{ readonly: true }}
                />
              </div>
            </MenuItem>
            <MenuItem> Orders</MenuItem>
            <MenuItem> Credit card</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  );
};
