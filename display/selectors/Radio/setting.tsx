import React from 'react';

import { ConfigSetting, renderToolbarSection } from '../../setting/RenderSetting';

const configSetting: ConfigSetting = {
  sections: [
    'inputOptions',
    'dimensions',
    'padding',
    'margin',
  ],
};

export const RadioSetting = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
