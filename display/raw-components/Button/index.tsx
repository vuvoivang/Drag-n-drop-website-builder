import cx from "classnames";
import React from "react";
import { Text } from "../Text";
import { ButtonProps, defaultProps } from "./props";

import { StyledButton } from "./styled";
export const Button = React.forwardRef((props: ButtonProps, ref: any) => {
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
  const styledClassNamesValues = (
    Object.values(styledClassNames) as string[]
  ).flat();
  const handleNavigate = () => {
    if(events.pageNavigate || events.absoluteUrlNavigate){
      const desUrl = events.pageNavigate || events.absoluteUrlNavigate;
      window.location.href = desUrl;
    }
  }
  return (
    <StyledButton
      ref={ref}
      className={cx([
        className,
        "button rounded w-full px-4 py-2 mt-4",
        {
          "shadow-lg": props.buttonStyle === "full",
        },
        styledClassNamesValues,
      ])}
      onClick={handleNavigate}
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
});

Button.defaultProps = defaultProps;
