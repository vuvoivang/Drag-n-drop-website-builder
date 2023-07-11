import { ToolbarPropItem, ToolbarPropSection, ToolbarPropSectionProps } from 'display/editor';
import { Nodes } from '@libs/interfaces';
import { generateConfigSections } from './helper';
import { useEditor } from '@libs/hooks';

export type ConfigSetting = {
  sections: Array<ToolbarPropSectionProps | string>;
};

const LIST_INPUT_COMPONENT_NAME = ['CraftInput', 'CraftCheckbox', 'CraftRadio'];

const getListInputIdCurrentPage = (nodes: Nodes, currentPage: string) => {
  const nodeIdAndDataPairs = Object.entries(nodes);
  return nodeIdAndDataPairs
    .filter(([_, node]) => {
      const comp = node.data?.type;
      const componentName = (comp as any).name || (comp as any).displayName || comp;
      return LIST_INPUT_COMPONENT_NAME.includes(componentName) && node.data.page === currentPage
    })
    .map(([id, _]) => ({
      value: id,
      label: id,
    }));
};

export const renderToolbarSection = (configSetting: ConfigSetting) => {
  const { nodes, currentPage } = useEditor((state) => ({
    pages: state.pageOptions.pages,
    nodes: state.nodes,
    currentPage: state.pageOptions.currentPage,
  }));
  const { sections } = generateConfigSections(configSetting, {
    for: {
      selectchildren: getListInputIdCurrentPage(nodes, currentPage),
    },
  });
  console.log(sections);
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
