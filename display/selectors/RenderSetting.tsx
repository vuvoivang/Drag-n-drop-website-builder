import { ToolbarItem, ToolbarSection, ToolbarSectionProps } from "display/editor";

export type ConfigSetting = {
    sections: ToolbarSectionProps[];
};

export const renderToolbarSection = (configSetting: ConfigSetting) => {
    const { sections } = configSetting;
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
              return <ToolbarItem {...item} />;
            })}
          </ToolbarSection>
        ))}
      </>
    );
  };