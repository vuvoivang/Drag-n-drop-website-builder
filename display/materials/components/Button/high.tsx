import { useNode } from "@libs/hooks";
import { UserComponent } from "@libs/interfaces";
import React from "react";
import { RawButton } from ".";
import { craftConfig } from "./craft";
import { ButtonProps } from "./props";

export const HigherOrderButton : UserComponent<ButtonProps> = React.forwardRef((props) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));
  return <RawButton ref={connect} {...props} />;
});

HigherOrderButton.craft = craftConfig;
