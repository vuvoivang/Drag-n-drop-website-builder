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
  return function Template() {
    return (
      <variant.type {...variant.overwriteProps}>
        {variant?.children?.length > 0 && variant?.children?.map((child) => getJsxFromVariant(child))}
      </variant.type>
    );
  };
};

export const genTemplateVariant = (config: ConfigTemplateVariant) => {
  return config?.map((item) => {
    const { raw, craft } = item;
    return {
      raw: getJsxFromVariant(raw),
      // craft: getJsxFromVariant(craft),
    };
  });
};
