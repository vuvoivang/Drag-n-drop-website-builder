import { MenuItemProps } from 'display/selectors/renderVariant';

export type ConfigTemplateVariant = Array<{
  raw: VariantComponent;
  craft: VariantComponent;
}>;
type VariantComponent = {
  type?: any;
  overwriteProps?: any;
  children?: VariantComponent[];
};

const getComponentFromVariant = (variant: VariantComponent) => {
  const childrenJsx = variant?.children?.map((child) => {
    return getJsxChildrenFromVariant(child);
  });
  return () => {
    // return functional component, just 1 time
    return <variant.type {...variant.overwriteProps}>{childrenJsx}</variant.type>;
  };
};
const getCraftJsxFromVariant = (variant: VariantComponent) => {
  const childrenJsx = variant?.children?.map((child) => {
    return getCraftJsxFromVariant(child);
  });
  return <variant.type {...variant.overwriteProps}>{childrenJsx}</variant.type>;
};
const getJsxChildrenFromVariant = (variant: VariantComponent) => {
  const childrenJsx = variant?.children?.map((child) => {
    return getJsxChildrenFromVariant(child);
  });
  // return jsx only
  return <variant.type {...variant.overwriteProps}>{childrenJsx}</variant.type>;
};

export const genTemplateVariant = (config: ConfigTemplateVariant) => {
  return config?.map((item) => {
    const { raw, craft } = item;
    return {
      raw: getComponentFromVariant(raw),
      craft: getComponentFromVariant(craft),
    };
  });
};

export const genItemsDefaultConfigTemplateVariant = (
  config: ConfigTemplateVariant
): (MenuItemProps & { isSubmenu: boolean })[] => {
  return config?.map((item) => {
    const { raw, craft } = item;
    return {
      isSubmenu: false,
      isTemplate: true,
      CraftElement: getCraftJsxFromVariant(craft),
      ViewElement: getComponentFromVariant(raw),
    };
  });
};
