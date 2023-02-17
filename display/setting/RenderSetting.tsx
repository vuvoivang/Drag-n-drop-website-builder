import {
  ToolbarPropItem,
  ToolbarPropSection,
  ToolbarPropSectionProps,
} from "display/editor";
import { generateConfigSections } from "./helper";

export type ConfigSetting = {
  sections: Array<ToolbarPropSectionProps | string>;
};

export const renderToolbarSection = (configSetting: ConfigSetting) => {
  const { sections } = generateConfigSections(configSetting);
  return (
    <>
      {sections?.map((section) => (
        <ToolbarPropSection
          title={section.title}
          props={section.props}
          summary={section.summary}
          key={section.title}
        >
          {section.items.map((item) => {
            return (
              <ToolbarPropItem
                {...item}
                key={Array.isArray(item.type) ? item.type[0] : item.type}
              />
            );
          })}
        </ToolbarPropSection>
      ))}
    </>
  );
};
