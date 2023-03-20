import { DEFAULT_PROP_KEYS, DEFAULT_SECTIONS } from './defaultConfig';
import { ConfigSetting } from './RenderSetting';

const generateDefaultItems = (defaultItems) => {
  return defaultItems.map((item) => {
    if (typeof item === 'string') {
      return DEFAULT_PROP_KEYS[item];
    } else if (typeof item === 'object') {
      const { propKey, index } = item;
      return DEFAULT_PROP_KEYS[propKey][index];
    }
  });
};

export const generateConfigSections = (configSetting: ConfigSetting) => {
  const { sections } = configSetting;
  const generatedSections = sections.map((section) => {
    if (typeof section === 'string') {
      const { items: defaultItems } = DEFAULT_SECTIONS[section];
      const generatedDefaultItems = generateDefaultItems(defaultItems);
      return {
        ...DEFAULT_SECTIONS[section],
        items: generatedDefaultItems,
      };
    } else if (typeof section === 'object') {
      const { section: sectionName, items, ...otherSectionProps } = section;
      if (DEFAULT_SECTIONS[sectionName]) {
        const { items: defaultItems, ...otherDefaultSectionProps } = DEFAULT_SECTIONS[sectionName];

        // get the default items from the default config
        const generatedDefaultItems = generateDefaultItems(defaultItems);
        let finalItems = [];
        if (!items || items.length === 0) {
          // no new items from config, use default
          finalItems = generatedDefaultItems;
        } else {
          // combine with new items from config
          finalItems = items.map((item) => {
            if (typeof item === 'string') {
              const foundDefaultItem = generatedDefaultItems.find((defaultItem) => defaultItem.propKey === item);
              return foundDefaultItem;
            } else if (typeof item === 'object') {
              const foundDefaultItem = generatedDefaultItems.find((defaultItem) => {
                if (item.hasOwnProperty('index')) {
                  // find by both propKey & index
                  return defaultItem.propKey === item.propKey && defaultItem.index === item.index;
                } else return defaultItem.propKey === item.propKey; // only propKey
              });
              return {
                // combine default item & new item
                ...foundDefaultItem,
                ...item,
              };
            }
          });
        }
        return {
          ...otherDefaultSectionProps,
          ...otherSectionProps,
          items: finalItems,
        };
      } else return section;
    }
  });
  return { sections: generatedSections };
};
