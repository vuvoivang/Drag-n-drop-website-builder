import { useEditor, useNode } from "@libs/hooks";
import { UserComponent } from "@libs/interfaces";
import React from "react";
import { AnchorProps } from "../../raw-components/Anchor/props";
import { defaultProps } from "../../raw-components/Anchor/props";
import cx from "classnames";
import { CraftText } from "../Text";
import { AnchorEvents } from "./event";
import { CLICK_TYPE } from "display/raw-components/constant";
import { StyledAnchor } from "display/raw-components/Anchor/styled";
import { AnchorSettings } from "./setting";

export const craftConfig = {
  displayName: "Anchor",
  props: defaultProps,
  related: {
    settings: AnchorSettings,
    events: AnchorEvents,
  },
};

export const CraftAnchor: UserComponent<AnchorProps> = (props: any) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const {
    enabled,
  } = useEditor((state) => ({
    enabled: state.options.enabled,}));

  const {
    text,
    textComponent,
    color,
    styledClassNames,
    fontSize,
    fontWeight,
    textAlign,
    events,
    onClick,
    nestedPropKey,
    ...otherProps
  } = props;
  const styledClassNamesValues = (
    Object.values(styledClassNames) as string[]
  ).flat();

  const { pageNavigate, absoluteUrlNavigate, href, clickType } = events;

  const handleNavigate = () => {
    if(pageNavigate || absoluteUrlNavigate){
      const desUrl = pageNavigate || absoluteUrlNavigate;
      window.location.href = desUrl;
    }
  }
  const mapClickEvent = {
    [CLICK_TYPE.NAVIGATE]: handleNavigate,
  }
  const isUsedHref = clickType === CLICK_TYPE.HREF;
  return (
    <StyledAnchor
      ref={connect}
      className={cx([
        "rounded w-full px-4 py-2 mt-4",
        {
          "shadow-lg": props.AnchorStyle === "full",
        },
        styledClassNamesValues,
      ])}
      href={enabled && isUsedHref ? href : ""}
      onClick={enabled && !isUsedHref && onClick ? onClick : mapClickEvent[clickType]}
      {...otherProps}
    >
      <CraftText
        {...textComponent}
        text={text}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
        nestedPropKey={nestedPropKey}
      />
    </StyledAnchor>
  );
};

CraftAnchor.craft = craftConfig;
