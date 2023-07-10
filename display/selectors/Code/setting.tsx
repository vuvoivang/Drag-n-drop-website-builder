import React from 'react';

import { ConfigSetting, renderToolbarSection } from '../../setting/RenderSetting';

const configSetting: ConfigSetting = {
  sections: ['typography', 'margin', 'appearanceText'],
};

export const CodeSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
