import { useEditor } from "@libs/hooks";
import { Nodes } from "@libs/interfaces";
import { ToolbarEventItem } from "display/editor/Toolbar/event/ToolbarEventItem";
import { ToolbarEventSection } from "display/editor/Toolbar/event/ToolbarEventSection";
import { generateConfigSections } from "./helper";

export type ConfigEvent = {
  sections: Array<string>;
};

const mapPagesToSelectData = (pages) => {
  return pages.map((page) => ({
    value: page.path,
    label: page.name,
  }));
};

const getListIdSectionCurrentPage = (nodes: Nodes, currentPage: string) => {
  const nodeIdAndDataPairs = Object.entries(nodes);
  return nodeIdAndDataPairs
    .filter(([_, node]) => node.data.isCanvas && node.data.page === currentPage)
    .map(([id, _]) => ({
      value: id,
      label: id,
    }));
};

export const renderToolbarSection = (configSetting: ConfigEvent) => {
  const { pages, nodes, currentPage } = useEditor((state) => ({
    pages: state.pageOptions.pages,
    nodes: state.nodes,
    currentPage: state.pageOptions.currentPage,
  }));

  const { sections } = generateConfigSections(configSetting, {
    pageNavigate: {
      selectchildren: mapPagesToSelectData(pages),
    },
    href: {
      selectchildren: getListIdSectionCurrentPage(nodes, currentPage),
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
                key={
                  Array.isArray(item.type)
                    ? `${item.propKey}${item.type[0]}`
                    : `${item.propKey}${item.type}`
                }
              />
            );
          })}
        </ToolbarEventSection>
      ))}
    </>
  );
};
