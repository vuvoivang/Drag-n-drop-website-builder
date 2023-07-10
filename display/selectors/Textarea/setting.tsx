import React from 'react';

import { ConfigSetting, renderToolbarSection } from '../../setting/RenderSetting';

const configSetting: ConfigSetting = {
  sections: [
    'placeholder',
    'textareaColors',
    'textareaOptions',
    'typography',
    'dimensions',
    'padding',
    'margin',
  ],
};

export const TextareaSetting = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
