import React from 'react';

import { ConfigSetting, renderToolbarSection } from '../../setting/RenderSetting';

const configSetting: ConfigSetting = {
  sections: ['map', 'dimensions', 'margin'],
};

export const MapSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
