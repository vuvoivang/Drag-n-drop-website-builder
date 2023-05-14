import { useEditor } from 'libs/core/src';
import React from 'react';

import { Sidebar, Menu, useProSidebar } from 'react-pro-sidebar';
import { DEFAULT_VARIANTS } from 'display/selectors/defaultVariant';
import { renderMenuItems } from 'display/selectors/renderVariant';
import styled from 'styled-components';
import _var from '../../styles/common/_var.module.scss';
import { default as ArrowLeft } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowRight } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import Button from '@material-ui/core/Button';
import { ExpandablePanel } from 'display/shared/components/ExpansionPanel';
import useResize from 'hooks/useResize';
type Theme = 'light' | 'dark';

const themes = {
  light: {
    sidebar: {
      backgroundColor: _var.whiteColor,
      color: _var.secondaryColor,
    },
    menu: {
      menuContent: _var.bgSubmenu,
      // icon: _var.primaryColor,
      hover: {
        // backgroundColor: _var.primaryColor,
        color: _var.primaryColor,
      },
      disabled: {
        color: _var.disableColor,
      },
    },
  },
  dark: {
    sidebar: {
      backgroundColor: _var.blackColor,
      color: _var.whiteColor,
    },
    menu: {
      menuContent: _var.whiteColor,
      icon: _var.whiteColor,
      hover: {
        backgroundColor: _var.blackColor,
        color: _var.whiteColor,
      },
      disabled: {
        color: _var.whiteColor,
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
  root: 'ps-menu-root',
  menuItemRoot: 'ps-menuitem-root',
  subMenuRoot: 'ps-submenu-root',
  button: 'ps-menu-button',
  prefix: 'ps-menu-prefix',
  suffix: 'ps-menu-suffix',
  label: 'ps-menu-label',
  icon: 'ps-menu-icon',
  subMenuContent: 'ps-submenu-content',
  SubMenuExpandIcon: 'ps-submenu-expand-icon',
  disabled: 'ps-disabled',
  active: 'ps-active',
  open: 'ps-open',
};
export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const { toggleSidebar, collapseSidebar, broken, collapsed } = useProSidebar();
  const [theme, setTheme] = React.useState<Theme>('light');
  const { width: widthToolBox, enableResize } = useResize({ minWidth: 200, initialWidth: 350 });

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  const menuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
      margin: '10px 0px',
    },
    icon: {
      // color: themes[theme].menu.icon,
      // @ts-ignore
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      marginRight: 7,
      svg: {
        width: '100%',
        height: '100%',
        fill: 'currentColor',
      },
    },
    SubMenuExpandIcon: ({ open }) => ({
      color: open ? _var.primaryColor : _var.secondaryColor,
      '& > span': { width: 7, height: 7 },
    }),
    subMenuContent: ({ level }) => ({
      backgroundColor: level === 0 ? hexToRgba(themes[theme].menu.menuContent, !collapsed ? 0.7 : 1) : 'transparent',
      overflow: 'visible!important',
      width: collapsed ? 'min-content' : undefined,
      minWidth: '200px',
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
        '&:hover': {
          backgroundColor: 'transparent',
          color: themes[theme].menu.hover.color,
        },
        minHeight: 50,
        height: 'auto',
        margin: '5px 0',
      };
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
      color: open ? _var.primaryColor : undefined,
      overflow: !collapsed ? 'visible' : undefined,
      // whiteSpace: !collapsed ? "normal" : undefined,
      // overflow: "visible",
      whiteSpace: 'normal',
    }),
  };

  return (
    <div
    // style={
    //   {
    // width: collapsed ? 'auto' : '280px',
    //   }
    // }
    className='relative'
    >
      <div
        style={{
          display: 'flex',
          height: 'calc(100% - 86px)',
          direction: 'ltr',
        }}
        className={`toolbox ${collapsed ? 'collapsed' : ''}`}
      >
        <Sidebar
          breakPoint='lg'
          backgroundColor={themes[theme].sidebar.backgroundColor}
          rootStyles={{
            color: themes[theme].sidebar.color,
            width: collapsed ? undefined : widthToolBox,
          }}
        >
          {DEFAULT_VARIANTS?.map((itemExpansion) => {
            return (
              <ExpandablePanel title={itemExpansion.title} Icon={itemExpansion.Icon}>
                {/* @ts-ignore */}
                <Menu menuItemStyles={menuItemStyles}>{renderMenuItems(itemExpansion, create)}</Menu>
              </ExpandablePanel>
            );
          })}
        </Sidebar>
      </div>
      <div className='bg-gray-50 collapse-sidebar' onClick={() => collapseSidebar()}>
        {collapsed ? (
          <ArrowRight fontSize='medium' />
        ) : (
          <div className='flex items-center'>
            <ArrowLeft fontSize='medium' />
            <span>Collapse</span>
          </div>
        )}
      </div>
      <div
        style={{ 
          position: 'absolute',
          width: '2px',
          top: '0',
          right: '-1px',
          bottom: '0',
          cursor: 'col-resize'
        }}
        onMouseDown={enableResize}
      />
    </div>
  );
};
