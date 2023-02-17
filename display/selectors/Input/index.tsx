import { UserComponent, useNode } from "libs/core/src";
import cx from "classnames";
import React from "react";

import { StyledInput } from "../../raw-components/Input/styled";

import { InputProps } from "../../raw-components/Input/props";
import { InputSetting } from "./setting";
import { defaultProps } from "display/raw-components/Input/props";

export const craftConfig = {
  displayName: "Input",
  props: defaultProps,
  related: {
    settings: InputSetting,
  },
};

export const CraftInput: UserComponent<InputProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const {
    styledClassNames,
    type,
    placeholder,
    inputOptions,
    className,
    ...otherProps
  } = props;
  const styledClassNamesValues = (
    Object.values(styledClassNames) as string[]
  ).flat();
  const { required, readonly } = inputOptions;
  return (
    <StyledInput
      ref={connect}
      className={cx([
        className,
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

CraftInput.craft = craftConfig;
