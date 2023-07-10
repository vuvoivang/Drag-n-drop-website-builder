import { UserComponent, useNode } from 'libs/core/src';
import cx from 'classnames';
import React from 'react';

import { StyledTextarea } from '../../raw-components/Textarea/styled';

import { TextareaProps } from '../../raw-components/Textarea/props';
import { TextareaSetting } from './setting';
import { defaultProps } from 'display/raw-components/Textarea/props';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';
import { WithThemeAndDatabase } from '@libs/utils';

export const craftConfig = {
  displayName: 'Textarea',
  props: defaultProps,
  related: {
    settings: TextareaSetting,
  },
};

export const CraftTextarea: UserComponent<WithThemeAndDatabase<TextareaProps>> = (props: WithThemeAndDatabase<TextareaProps>) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  const { styledClassNames, placeholder, textareaOptions, className, ...otherProps } = useGetValuesFromReferencedProps(props);
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const { required, readonly } = textareaOptions;
  return (
    // @ts-ignore
    <StyledTextarea
      ref={connect}
      className={cx([
        className,
        'rounded w-full px-4 py-2 mt-4',
        styledClassNamesValues,
      ])}
      required={required}
      placeholder={placeholder}
      readOnly={readonly}
      {...otherProps}
    />
  );
};

CraftTextarea.craft = craftConfig;
