import cx from 'classnames';
import React from 'react';
import { CLICK_TYPE } from '../constant';
import { Text } from '../Text';
import { ButtonProps, defaultProps } from './props';

import { StyledButton } from './styled';
export const Button = (props: ButtonProps) => {
  const {
    text,
    textComponent,
    color,
    styledClassNames,
    fontSize,
    fontWeight,
    textAlign,
    className,
    events,
    ...otherProps
  } = props;

  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();

  const { pageNavigate, absoluteUrlNavigate, popup, clickType } = events;
  const handleNavigate = () => {
    if (pageNavigate || absoluteUrlNavigate) {
      const desUrl = pageNavigate || absoluteUrlNavigate;
      window.location.href = desUrl;
    }
  };
  const handleOpenPopup = () => {
    document.getElementById(popup).style.display = 'block';
  };
  const mapClickEvent = {
    [CLICK_TYPE.NAVIGATE]: handleNavigate,
    [CLICK_TYPE.POP_UP]: handleOpenPopup,
  };

  return (
    <StyledButton
      className={cx([
        className,
        'button rounded w-full px-4 py-2',
        {
          'shadow-lg': props.buttonStyle === 'full',
        },
        styledClassNamesValues,
      ])}
      onClick={mapClickEvent[clickType]}
      {...otherProps}
    >
      <Text
        {...textComponent}
        text={text}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
      />
    </StyledButton>
  );
};

Button.defaultProps = defaultProps;
