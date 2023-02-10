import { useEditor } from "libs/core/src";
import React from "react";

import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { DEFAULT_VARIANTS } from "display/selectors/defaultVariant";
import { renderMenuItems } from "display/selectors/renderVariant";

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
      margin: "10px 0px",
    },
    icon: {
      color: themes[theme].menu.icon,
      // @ts-ignore
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      marginRight: 7,
      svg: {
        width: "100%",
        height: "100%",
        fill: "currentColor",
      },
    },
    SubMenuExpandIcon: ({ open }) => ({
      color: open ? "#079512" : "#b6b7b9",
      "& > span": { width: 7, height: 7 },
    }),
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, !collapsed ? 0.4 : 1)
          : "transparent",
      overflow: "visible!important",
      width: collapsed ? "min-content": undefined,
      minWidth: "200px",
    }),
    button: ({ level }) => {
      // @ts-ignore
      // if (level === 0) {
      //   return {
      //     [`&.${menuClasses.disabled}`]: {
      //       color: themes[theme].menu.disabled.color,
      //     },
      //     "&:hover": {
      //       backgroundColor: hexToRgba(
      //         themes[theme].menu.hover.backgroundColor,
      //         1
      //       ),
      //       color: themes[theme].menu.hover.color,
      //     },
      //   };
      // } else
      //   return {
      //     [`&.${menuClasses.disabled}`]: {
      //       color: themes[theme].menu.disabled.color,
      //     },
      //     "&:hover": {
      //       backgroundColor: "transparent",
      //       color: themes[theme].menu.hover.color,
      //     },
      //   };
      return {
        [`&.${menuClasses.disabled}`]: {
          color: themes[theme].menu.disabled.color,
        },
        "&:hover": {
          backgroundColor: "transparent",
          color: themes[theme].menu.hover.color,
        },
        minHeight: 50,
        height: "auto",
        margin: "5px 0",
      };
    },
    label: ({ open }) => ({
      fontWeight: open ? 700 : undefined,
      color: open ? "#079512" : undefined,
      overflow: !collapsed ? "visible": undefined,
      // whiteSpace: !collapsed ? "normal" : undefined,
      // overflow: "visible",
      whiteSpace:  "normal",
    }),
  };

  return (
    <div
      style={{
        display: "flex",
        height: "calc(100% - 65px)",
        direction: "ltr",
      }}
    >
      <Sidebar
        breakPoint="lg"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
          width: collapsed ? undefined : "280px",
        }}
      >
        {/* @ts-ignore  */}
        <Menu menuItemStyles={menuItemStyles}>
          {renderMenuItems(DEFAULT_VARIANTS, create)}
        </Menu>
      </Sidebar>
    </div>
  );
};
