import { useNode } from '@libs/hooks';
import { UserComponent } from '@libs/interfaces';
import { StyledButton } from 'display/raw-components/Button/styled';
import React from 'react';
import { ButtonProps } from '../../raw-components/Button/props';
import { defaultProps } from '../../raw-components/Button/props';
import { ButtonSettings } from './setting';
import cx from 'classnames';
import { CraftText } from '../Text';
import { ButtonEvents } from './event';
import { WithThemeAndDatabase } from '@libs/utils';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';

export const craftConfig = {
  displayName: 'Button',
  props: defaultProps,
  related: {
    settings: ButtonSettings,
    events: ButtonEvents,
  },
  isResizable: true,
};

export const CraftButton: UserComponent<WithThemeAndDatabase<ButtonProps>> = (
  props: WithThemeAndDatabase<ButtonProps>
) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const {
    text,
    textComponent,
    color,
    styledClassNames,
    fontSize,
    fontWeight,
    textAlign,
    events,
    onClick,
    nestedPropKey,
    margin, // unused for resizable
    width, // unused for resizable
    height, // unused for resizable
    ...otherProps
  } = useGetValuesFromReferencedProps(props);
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const handleNavigate = () => {
    if (events.pageNavigate || events.absoluteUrlNavigate) {
      const desUrl = events.pageNavigate || events.absoluteUrlNavigate;
      window.location.href = desUrl;
    }
  };
  return (
    <StyledButton
      ref={connect}
      className={cx([
        'rounded w-full px-4 py-2',
        {
          'shadow-lg': props.buttonStyle === 'full',
        },
        styledClassNamesValues,
      ])}
      onClick={onClick ? onClick : handleNavigate}
      {...otherProps}
    >
      <CraftText
        {...textComponent}
        text={text}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        nestedPropKey={nestedPropKey}
      />
    </StyledButton>
  );
};

CraftButton.craft = craftConfig;
