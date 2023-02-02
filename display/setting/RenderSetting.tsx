import {
  ToolbarItem,
  ToolbarSection,
  ToolbarSectionProps,
} from "display/editor";
import { generateConfigSections } from "./helper";

export type ConfigSetting = {
  sections: Array<ToolbarSectionProps | string>;
};

export const renderToolbarSection = (configSetting: ConfigSetting) => {
  const { sections } = generateConfigSections(configSetting);
  return (
    <>
      {sections?.map((section) => (
        <ToolbarSection
          title={section.title}
          props={section.props}
          summary={section.summary}
          key={section.title}
        >
          {section.items.map((item) => {
            return (
              <ToolbarItem
                {...item}
                key={Array.isArray(item.type) ? item.type[0] : item.type}
              />
            );
          })}
        </ToolbarSection>
      ))}
    </>
  );
};
