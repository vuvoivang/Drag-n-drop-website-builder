import React from 'react';

import { ConfigSetting, renderToolbarSection } from '../../setting/RenderSetting';

const configSetting: ConfigSetting = {
  sections: [
    'inputOptions',
    'dimensions',
    'padding',
    'margin',
    'inputName',
  ],
};

export const CheckboxSetting = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
