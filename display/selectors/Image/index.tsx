import { defaultProps, ImageProps } from 'display/raw-components/Image/props';
import React from 'react';
import { StyledImage } from 'display/raw-components/Image/styled';
import { Resizer } from '../Resizer';
import cx from 'classnames';

import { ImageSettings } from './setting';
import { UserComponent } from '@libs/interfaces';
import { WithThemeAndDatabase } from '@libs/utils';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';

export const craftConfig = {
  displayName: 'Image',
  props: defaultProps,
  related: {
    settings: ImageSettings,
  },
  isResizable: true,
};

export const CraftImage: UserComponent<WithThemeAndDatabase<ImageProps>> = (props: WithThemeAndDatabase<ImageProps>) => {
  const { width, height, src, alt, className, ...otherProps } = useGetValuesFromReferencedProps(props);
  const imgSrc = src.type === "dynamic-data" ? src.value : src;
  return (
    <StyledImage
      className={cx([className, 'image cursor-pointer'])}
      src={imgSrc}
      alt={alt}
      width={'100%'}
      height={'100%'}
      {...otherProps}
    />
  );
};

CraftImage.craft = craftConfig;
