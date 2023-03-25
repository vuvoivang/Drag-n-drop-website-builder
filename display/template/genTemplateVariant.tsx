export type ConfigTemplateVariant = Array<{
  raw: VariantComponent;
  craft: VariantComponent;
}>;
type VariantComponent = {
  type?: any;
  overwriteProps?: any;
  children?: VariantComponent[];
};

const getJsxFromVariant = (variant: VariantComponent) => {
  const childrenJsx = variant?.children?.map((child) => {
    return getJsxChildrenFromVariant(child);
  });
  return () => { // return functional component, just 1 time
    return <variant.type {...variant.overwriteProps}>{childrenJsx}</variant.type>;
  };
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
      raw: getJsxFromVariant(raw),
      craft: getJsxFromVariant(craft),
    };
  });
};
