import { useNode } from "libs/core/src";
import React from "react";
import { craftConfig } from "./craft";
import { StyledImage } from "./styled";
import { Resizer } from "../Resizer";

export const Image = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { width, height, src, alt, ...otherProps } = props;

  return (
    <Resizer propKey={{ width: "width", height: "height" }}>
      <StyledImage
        className="cursor-pointer"
        ref={connect}
        src={src}
        alt={alt}
        width={"100%"}
        height={"100%"}
        {...otherProps}
      />
    </Resizer>
  );
};

Image.craft = craftConfig;
