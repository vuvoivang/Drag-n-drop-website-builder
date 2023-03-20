import React from 'react';

import { ConfigSetting, renderToolbarSection } from '../../setting/RenderSetting';

const configSetting: ConfigSetting = {
  sections: ['dimensions', 'colors', 'margin', 'padding', 'containerDecoration', 'containerAlignment'],
};

export const ContainerSettings = () => {
  return <React.Fragment>{renderToolbarSection(configSetting)}</React.Fragment>;
};
