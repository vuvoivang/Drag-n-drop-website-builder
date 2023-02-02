import { UserComponent, useNode } from "libs/core/src";
import cx from "classnames";
import React from "react";
import { Text } from "../Text";
import { craftConfig } from "./craft";

import { ButtonProps } from "./props";
import { StyledButton } from "./styled";

export const Button: UserComponent<ButtonProps> = (props: any) => {
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
    ...otherProps
  } = props;
  const styledClassNamesValues = (
    Object.values(styledClassNames) as string[]
  ).flat();
  return (
    <StyledButton
      ref={connect}
      className={cx([
        "rounded w-full px-4 py-2 mt-4",
        {
          "shadow-lg": props.buttonStyle === "full",
        },
        styledClassNamesValues,
      ])}
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

Button.craft = craftConfig;
