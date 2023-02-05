import React from "react";
import { defaultProps, ImageProps } from "./props";
import { StyledImage, StyledDiv } from "./styled";
import cx from "classnames";

export const Image = (props: ImageProps) => {
  const { width, height, src, alt, className, ...otherProps } = props;

  return (
    <StyledDiv width={width} height={height}>
      <StyledImage
        className={cx([className, "image cursor-pointer"])}
        src={src}
        alt={alt}
        width={"100%"}
        height={"100%"}
        {...otherProps}
      />
    </StyledDiv>
  );
};

Image.defaultProps = defaultProps;
