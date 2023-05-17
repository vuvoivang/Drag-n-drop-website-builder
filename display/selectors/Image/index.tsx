import { defaultProps, ImageProps } from 'display/raw-components/Image/props';
import React from 'react';
import { StyledImage } from '../../raw-components/Image/styled';
import { Resizer } from '../Resizer';
import cx from 'classnames';

import { ImageSettings } from './setting';
import { UserComponent } from '@libs/interfaces';
import { WithThemeAndDatabase } from '@libs/utils';

export const craftConfig = {
  displayName: 'Image',
  props: defaultProps,
  related: {
    settings: ImageSettings,
  },
};

export const CraftImage: UserComponent<WithThemeAndDatabase<ImageProps>> = (props: WithThemeAndDatabase<ImageProps>) => {
  const { width, height, src, alt, className, ...otherProps } = props;

  return (
    <Resizer propKey={{ width: 'width', height: 'height' }}>
      <StyledImage
        className={cx([className, 'image cursor-pointer'])}
        src={src}
        alt={alt}
        width={'100%'}
        height={'100%'}
        {...otherProps}
      />
    </Resizer>
  );
};

CraftImage.craft = craftConfig;
