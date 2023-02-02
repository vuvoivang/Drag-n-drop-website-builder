import { UserComponent, useNode } from 'libs/core/src';
import cx from 'classnames';
import React from 'react';
import { Text } from '../Text';
import { craftConfig } from './craft';

import { ButtonProps } from './props';
import { StyledButton } from './styled';

export const Button: UserComponent<ButtonProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { text, textComponent, color, ...otherProps } = props;
  return (
    <StyledButton
      ref={connect}
      className={cx([
        'rounded w-full px-4 py-2',
        {
          'shadow-lg': props.buttonStyle === 'full',
        },
      ])}
      {...otherProps}
    >
      <Text {...textComponent} text={text} color={props.color} />
    </StyledButton>
  );
};

Button.craft = craftConfig;