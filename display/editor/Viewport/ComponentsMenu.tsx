import { getCurrentRootNodeIdComponent, Node, useEditor } from 'libs/core/src';
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
          {renderComponentSubItems(subItem, fnCreateCraftItem)}
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
const renderComponentSubItems = (subItem: MenuItemProps, fnCreateCraftItem) => {
  const {
    label,
    CraftElement,
    ViewElement,
  } = subItem;
  return (
    <div className='pl-20' 
     >
      <MenuItem
        rootStyles={{
          [`.${menuClasses.button}`]: {
            cursor: 'default!important',
          },
        }}
      >
        {' '}
        <div
          className='flex justify-center cursor-move'
          ref={(ref) => {
            fnCreateCraftItem(ref, CraftElement, {
              onParseReactElement: (node: Node, _) => {
                node.data.belongToComponent = label;
              }
            });
          }}
          style={{
            transform: `scale(${0.5})`,
            transformOrigin: 'top left',
          }}
        >
          <RenderViewElement ViewElement={ViewElement} />
        </div>
      </MenuItem>
    </div >
  );
};

export const ComponentMenuItems = () => {
  const {
    components = [],
    connectors: { create },
    getDomNodeId,
    parseJSXFromRootNodeTreeId,
  } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    components: state.componentOptions.components,
    getDomNodeId: (id) => query.node(id).get().dom,
    parseJSXFromRootNodeTreeId: query.parseJSXFromRootNodeTreeId,
  }));
  const generatedMenuComponents = components?.map((item) => {
    return {
      label: item.name,
      Icon: LabelSvg,
      subItems: [],
      ViewElement: getDomNodeId(getCurrentRootNodeIdComponent(item.name))?.cloneNode(true),
      CraftElement: parseJSXFromRootNodeTreeId(getCurrentRootNodeIdComponent(item.name)),
    }
  })
  return (
    <>
      {renderMenuComponentItems(generatedMenuComponents, create)}
    </>
  );
};
