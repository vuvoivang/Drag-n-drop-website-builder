import React from 'react';

import { Resizer } from '../Resizer';
import { ContainerProps } from '../../raw-components/Container/props';
import cx from 'classnames';

import { defaultProps } from '../../raw-components/Container/props';
import { ContainerSettings } from './setting';
import { UserComponent } from '@libs/interfaces';
import { useNode } from '@libs/hooks';
import { WithThemeAndDatabase } from '@libs/utils';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';

export const craftConfig = {
  displayName: 'Container',
  props: defaultProps,
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
  },
  related: {
    settings: ContainerSettings,
  },
};

export const CraftContainer: UserComponent<WithThemeAndDatabase<ContainerProps>> = (props: Partial<WithThemeAndDatabase<ContainerProps>>) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const { children } = props;
  const {
    flexDirection,
    alignItems,
    justifyContent,
    fillSpace,
    background,
    color,
    padding,
    margin,
    shadow,
    radius,
    styledClassNames,
  } = useGetValuesFromReferencedProps(props);
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const { id } = useNode();
  return (
    <Resizer
      propKey={{ width: 'width', height: 'height', maxWidth: 'maxWidth' }}
      className={cx(['flex custom-container', styledClassNamesValues])}
      style={{
        justifyContent,
        flexDirection,
        alignItems,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        boxShadow: shadow === 0 ? 'none' : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
        borderRadius: `${radius}px`,
        flex: fillSpace === 'yes' ? 1 : 'unset',
      }}
      id={id}
    >
      {children}
    </Resizer>
  );
};

CraftContainer.craft = craftConfig;
