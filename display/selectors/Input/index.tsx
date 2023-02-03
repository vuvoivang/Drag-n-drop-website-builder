import { UserComponent, useNode } from "libs/core/src";
import cx from "classnames";
import React from "react";
import { craftConfig } from "./craft";

import { InputProps } from "./props";
import { StyledInput } from "./styled";

export const Input: UserComponent<InputProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { styledClassNames, type, placeholder, inputOptions, ...otherProps } =
    props;
  const styledClassNamesValues = (
    Object.values(styledClassNames) as string[]
  ).flat();
  const { required, readonly } = inputOptions;
  return (
    <StyledInput
      ref={connect}
      className={cx([
        "rounded w-full px-4 py-2 mt-4",
        {
          "shadow-lg": props.inputStyle === "full",
        },
        styledClassNamesValues,
      ])}
      type={type}
      required={required}
      placeholder={placeholder}
      readOnly={readonly}
      {...otherProps}
    />
  );
};

Input.craft = craftConfig;
