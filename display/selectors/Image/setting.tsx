import React from 'react';

import { ConfigSetting, renderToolbarSection } from '../../setting/RenderSetting';

const configSetting: ConfigSetting = {
  sections: ['dimensions', 'radius', 'src', 'alt', 'objectFit'],
};

export const ImageSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
