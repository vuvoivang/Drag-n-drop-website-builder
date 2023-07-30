import { getCurrentRootNodeIdComponent, useEditor } from 'libs/core/src';
import React, { useEffect, useMemo, useRef } from 'react';

import _var from '../../styles/common/_var.module.scss';
import LabelSvg from '../../../public/icons/toolbox/label.svg';


import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { Tooltip } from '@material-ui/core';
import { menuClasses } from 'display/editor/Viewport/Toolbox';


export type MenuItemProps = {
  CraftElement?: any;
  ViewElement?: any;
  overwritePropsView?: any;
  overwritePropsCraft?: any;
  label?: string;
  Icon?: any;
  subItems?: Array<MenuItemProps & { isSubmenu: boolean }>;
  isTemplate?: boolean;
};



export const renderMenuComponentItems = (subItems: Array<MenuItemProps>, fnCreateCraftItem) => {
  return (
    <>
      {subItems?.map((subItem) => (
        <SubMenu
          className='root-sub-menu'
          label={subItem.label}
          icon={<subItem.Icon style={{ fill: 'currentColor', width: '100%', height: '100%' }} />}
          key={subItem.label}
        >
          {renderComponentSubItems(subItems, fnCreateCraftItem)}
        </SubMenu>
      ))}
    </>
  );
};
const RenderViewElement = (props) => {
  const ViewElement: HTMLElement = props.ViewElement;
  const ref = useRef() as any;
  useEffect(() => {
    if (ViewElement && ref.current) {
      ref.current?.appendChild(ViewElement);
    }
    return () => {
      if (ViewElement && ref.current) {
        ref.current?.removeChild(ViewElement);
      }
    }
  }, [ViewElement]);
  return <Tooltip title='Drag and drop to use this' placement='right'>
    <div ref={ref} />
  </Tooltip>;
}
const renderComponentSubItems = (subItems: Array<MenuItemProps>, fnCreateCraftItem) => {
  return (
    <div className='pl-20'>
      {Array.isArray(subItems) &&
        subItems?.map((item, idx) => {
          const {
            CraftElement,
            ViewElement,
          } = item;

          return (
            <MenuItem
              rootStyles={{
                [`.${menuClasses.button}`]: {
                  cursor: 'default!important',
                },
              }}
              key={idx}
            >
              {' '}
              <div
                className='flex justify-center'
              // ref={(ref) => {
              //   // fnCreateCraftItem(ref, <CraftElement />);
              // }}
              >
                <RenderViewElement ViewElement={ViewElement} />
              </div>
            </MenuItem>
          );
        })}
    </div >
  );
};

export const ComponentMenuItems = () => {
  const {
    components = [],
    actions,
    getDomNodeId,
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    components: state.componentOptions.components,
    getDomNodeId: (id) => query.node(id).get().dom
  }));
  const generatedMenuComponents = components?.map((item) => {
    return {
      label: item.name,
      Icon: LabelSvg,
      subItems: [],
      ViewElement: getDomNodeId(getCurrentRootNodeIdComponent(item.name))?.cloneNode(true),
      CraftElement: <div>Hello</div>,
    }
  })
  // const shadow = shadowsToCreate[0].cloneNode(true) as HTMLElement;
  return (
    <>
      {renderMenuComponentItems(generatedMenuComponents, actions.clone)}
    </>
  );
};
