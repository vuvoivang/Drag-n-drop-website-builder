import { useNode } from "@libs/hooks";
import { UserComponent } from "@libs/interfaces";
import { StyledButton } from "display/raw-components/Button/styled";
import React from "react";
import { ButtonProps } from "../../raw-components/Button/props";
import { defaultProps } from "../../raw-components/Button/props";
import { ButtonSettings } from "./setting";
import cx from "classnames";
import { CraftText } from "../Text";
import { ButtonEvents } from "./event";

export const craftConfig = {
  displayName: "Button",
  props: defaultProps,
  related: {
    settings: ButtonSettings,
    events: ButtonEvents,
  },
};

export const CraftButton: UserComponent<ButtonProps> = (props: any) => {
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
      <CraftText
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

CraftButton.craft = craftConfig;
