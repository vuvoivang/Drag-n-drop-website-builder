import cx from "classnames";
import React from "react";
import { defaultProps } from "./craft";

import { StyledButton } from "./styled";

export const RawButton =  React.forwardRef((props: any, ref) => {
  
  const {
    text,
    textComponent,
    color,
    styledClassNames,
    fontSize,
    fontWeight,
    textAlign,
    // variantClassNames = [],
    ...otherProps
  } = props;
  const styledClassNamesValues = (
    Object.values(styledClassNames) as string[]
  ).flat();
  return (
    <StyledButton
      ref={ref}
      className={cx([
        "rounded w-full px-4 py-2 mt-4",
        {
          "shadow-lg": props.buttonStyle === "full",
        },
        styledClassNamesValues,
        // variantClassNames,
      ])}
      {...otherProps}
    >
      {/* <Text
        {...textComponent}
        text={text}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
      /> */}
      {text}
    </StyledButton>
  );
});

RawButton.defaultProps = defaultProps;