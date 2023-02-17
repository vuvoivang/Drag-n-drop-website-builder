import { useEditor } from "@libs/hooks";
import { ToolbarEventItem } from "display/editor/Toolbar/event/ToolbarEventItem";
import { ToolbarEventSection } from "display/editor/Toolbar/event/ToolbarEventSection";
import { generateConfigSections } from "./helper";

export type ConfigEvent = {
  sections: Array<string>;
};

export const renderToolbarSection = (configSetting: ConfigEvent) => {
  const { pages } = useEditor((state) => ({
    pages: state.pageOptions.pages,
  }));
  const mapPagesToSelectData = (pages) => {
    return pages.map((page) => ({
      value: page.path,
      label: page.name,
    }))
  }
  const { sections } = generateConfigSections(configSetting, {
    navigate: {
      selectChildren: mapPagesToSelectData(pages),
    },
  });
  return (
    <>
      {sections?.map((section) => (
        <ToolbarEventSection
          title={section.title}
          props={section.props}
          summary={section.summary}
          key={section.title}
        >
          {section.items.map((item) => {
            return (
              <ToolbarEventItem
                {...item}
                key={Array.isArray(item.type) ? item.type[0] : item.type}
              />
            );
          })}
        </ToolbarEventSection>
      ))}
    </>
  );
};
