import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { Tooltip } from '@material-ui/core';
import { menuClasses } from 'display/editor/Viewport/Toolbox';

export type ConfigVariant = Array<{
  title: string,
  subItems: Array<MenuItemProps>;
}>;
type MenuItemProps = {
  CraftElement?: any;
  ViewElement?: any;
  overwritePropsView?: any;
  overwritePropsCraft?: any;
  label?: string;
  Icon?: any;
  subItems?: Array<MenuItemProps & { isSubmenu: boolean }>;
  isTemplate?: boolean;
};
const generateConfigSections = (configVariant) => configVariant;

export const renderMenuItems = (configVariant: ConfigVariant, fnCreateCraftItem) => {
  const { subItems } = generateConfigSections(configVariant);
  return (
    <>
      {subItems?.map((subItem) => (
        <SubMenu
          label={subItem.label}
          icon={<subItem.Icon style={{ fill: 'currentColor', width: '100%', height: '100%' }} />}
          key={subItem.label}
        >
          {renderSubItems(subItem.subItems, fnCreateCraftItem)}
        </SubMenu>
      ))}
    </>
  );
};

const renderSubItems = (subItems: Array<MenuItemProps & { isSubmenu: boolean }>, fnCreateCraftItem) => {
  return (
    <div className='pl-20'>
      {Array.isArray(subItems) &&
        subItems?.map((item, idx) => {
          const {
            isSubmenu,
            subItems,
            label,
            Icon,
            isTemplate,
            CraftElement,
            ViewElement,
            overwritePropsCraft = {},
            overwritePropsView = {},
          } = item;
          if (isSubmenu && subItems?.length > 0) {
            return (
              <SubMenu
                label={label}
                icon={
                  Icon && (
                    <Icon
                      style={{
                        fill: 'currentColor',
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  )
                }
                key={idx}
              >
                {renderSubItems(subItems, fnCreateCraftItem)}
              </SubMenu>
            );
          } else {
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
                  ref={(ref) => {
                    // template: multiple craft nodes => use original jsx to parse
                    if (isTemplate) fnCreateCraftItem(ref, CraftElement);
                    else fnCreateCraftItem(ref, <CraftElement {...overwritePropsCraft} />);
                  }}
                >
                  <Tooltip title='Drag and drop to use this' placement='right'>
                    <ViewElement className='cursor-move' {...overwritePropsView} />
                  </Tooltip>
                </div>
              </MenuItem>
            );
          }
        })}
    </div>
  );
};
