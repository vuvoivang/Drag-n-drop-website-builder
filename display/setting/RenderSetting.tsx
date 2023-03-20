import { ToolbarPropItem, ToolbarPropSection, ToolbarPropSectionProps } from 'display/editor';
import { generateConfigSections } from './helper';

export type ConfigSetting = {
  sections: Array<ToolbarPropSectionProps | string>;
};

export const renderToolbarSection = (configSetting: ConfigSetting) => {
  const { sections } = generateConfigSections(configSetting);
  return (
    <>
      {sections?.map((section) => (
        <ToolbarPropSection title={section.title} props={section.props} summary={section.summary} key={section.title}>
          {section.items.map((item, idx) => {
            return (
              <ToolbarPropItem
                {...item}
                key={idx}
                // key={Array.isArray(item.type) ? `${section.title}-${item.type[0]}-${idx}` : `${section.title}-${item.type}-${idx}`}
              />
            );
          })}
        </ToolbarPropSection>
      ))}
    </>
  );
};
