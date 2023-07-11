import { UserComponent, useEditor, useNode } from 'libs/core/src';
import cx from 'classnames';
import React from 'react';

import { StyledCheckbox } from 'display/raw-components/Checkbox/styled';

import { CheckboxProps } from 'display/raw-components/Checkbox/props';
import { CheckboxSetting } from './setting';
import { defaultProps } from 'display/raw-components/Checkbox/props';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';
import { WithThemeAndDatabase } from '@libs/utils';

export const craftConfig = {
  displayName: 'Checkbox',
  props: defaultProps,
  related: {
    settings: CheckboxSetting,
  },
};

export const CraftCheckbox: UserComponent<WithThemeAndDatabase<CheckboxProps>> = (props: WithThemeAndDatabase<CheckboxProps>) => {
  const {
    id,
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const { styledClassNames, inputOptions, className, ...otherProps } = useGetValuesFromReferencedProps(props);
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const { required, readonly } = inputOptions;
  return (
    // @ts-ignore
    <StyledCheckbox
      ref={connect}
      className={cx([
        className,
        'rounded w-full px-4 py-2 mt-4',

        styledClassNamesValues,
      ])}
      type='checkbox'
      required={required}
      readOnly={readonly}
      checked={enabled ? false : undefined}
      id={id}
      {...otherProps}
    />
  );
};

CraftCheckbox.craft = craftConfig;
