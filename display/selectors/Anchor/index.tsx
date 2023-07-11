import { useEditor, useNode } from '@libs/hooks';
import { UserComponent } from '@libs/interfaces';
import React from 'react';
import { AnchorProps } from 'display/raw-components/Anchor/props';
import { defaultProps } from 'display/raw-components/Anchor/props';
import cx from 'classnames';
import { CraftText } from '../Text';
import { AnchorEvents } from './event';
import { CLICK_TYPE } from 'display/raw-components/constant';
import { StyledAnchor } from 'display/raw-components/Anchor/styled';
import { AnchorSettings } from './setting';
import { WithThemeAndDatabase } from '@libs/utils';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';

export const craftConfig = {
  displayName: 'Anchor',
  props: defaultProps,
  related: {
    settings: AnchorSettings,
    events: AnchorEvents,
  },
};

export const CraftAnchor: UserComponent<WithThemeAndDatabase<AnchorProps>> = (props: WithThemeAndDatabase<AnchorProps>) => {
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled: enabledEvent } = useEditor((state) => ({
    enabled: !state.options.enabled,
  }));

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
  } = useGetValuesFromReferencedProps(props);
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();

  const { pageNavigate, absoluteUrlNavigate, href, clickType } = events;

  const handleNavigate = () => {
    if (isUsedHref) return;
    if (pageNavigate || absoluteUrlNavigate) {
      const desUrl = pageNavigate || absoluteUrlNavigate;
      window.location.href = desUrl;
    }
  };
  const mapClickEvent = {
    [CLICK_TYPE.NAVIGATE]: handleNavigate,
  };
  const isUsedHref = clickType === CLICK_TYPE.HREF;
  return (
    <StyledAnchor
      ref={connect}
      className={cx([
        'rounded w-full px-4 py-2 mt-4',
        {
          'shadow-lg': props.anchorStyle === 'full',
        },
        styledClassNamesValues,
      ])}
      href={enabledEvent && isUsedHref ? '#' + href : undefined}
      onClick={enabledEvent && !isUsedHref && onClick ? onClick : mapClickEvent[clickType]}
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
