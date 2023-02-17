import { DEFAULT_EVENT_KEYS, DEFAULT_SECTIONS } from "./defaultConfig";
import { ConfigEvent } from "./RenderEvent";

const generateDefaultItems = (defaultItems, contextDataForItems) => {
  return defaultItems.map((item) => {
    const contextDataThisItem = contextDataForItems[item] || {};
    return {
      ...DEFAULT_EVENT_KEYS[item],
      ...contextDataThisItem,
    }
  });
};

export const generateConfigSections = (configEvent: ConfigEvent, contextDataForItems: any) => {
  const { sections } = configEvent;
  const generatedSections = sections.map((section) => {
    const { items: defaultItems } = DEFAULT_SECTIONS[section];
    const generatedDefaultItems = generateDefaultItems(defaultItems, contextDataForItems);
    return {
      ...DEFAULT_SECTIONS[section],
      items: generatedDefaultItems,
    };
  });
  return { sections: generatedSections };
};
