import { UserComponent, useEditor, useNode } from 'libs/core/src';
import cx from 'classnames';
import React from 'react';

import { StyledRadio } from 'display/raw-components/Radio/styled';

import { RadioProps } from 'display/raw-components/Radio/props';
import { RadioSetting } from './setting';
import { defaultProps } from 'display/raw-components/Radio/props';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';
import { WithThemeAndDatabase } from '@libs/utils';

export const craftConfig = {
  displayName: 'Radio',
  props: defaultProps,
  related: {
    settings: RadioSetting,
  },
};

export const CraftRadio: UserComponent<WithThemeAndDatabase<RadioProps>> = (props: WithThemeAndDatabase<RadioProps>) => {
  const {
    id,
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { styledClassNames, inputOptions, className, ...otherProps } = useGetValuesFromReferencedProps(props);
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const { required, readonly } = inputOptions;
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    // @ts-ignore
    <StyledRadio
      ref={connect}
      className={cx([
        className,
        'rounded w-full px-4 py-2 mt-4',
        styledClassNamesValues,
      ])}
      id={id}
      type='radio'
      required={required}
      readOnly={readonly}
      checked={enabled ? false : undefined}
      {...otherProps}
    />
  );
};

CraftRadio.craft = craftConfig;
