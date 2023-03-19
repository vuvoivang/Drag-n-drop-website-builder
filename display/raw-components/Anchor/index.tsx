import cx from 'classnames';
import React from 'react';
import { CLICK_TYPE } from '../constant';
import { Text } from '../Text';
import { AnchorProps, defaultProps } from './props';

import { StyledAnchor } from './styled';
export const Anchor = React.forwardRef((props: AnchorProps, ref: any) => {
  const {
    text,
    textComponent,
    color,
    styledClassNames,
    fontSize,
    fontWeight,
    textAlign,
    className,
    events,
    ...otherProps
  } = props;

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
      ref={ref}
      className={cx([
        className,
        'anchor rounded w-full px-4 py-2 mt-4',
        {
          'shadow-lg': props.anchorStyle === 'full',
        },
        styledClassNamesValues,
      ])}
      href={isUsedHref ? '#' + href : undefined}
      onClick={isUsedHref && mapClickEvent[clickType]}
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
    </StyledAnchor>
  );
});

Anchor.defaultProps = defaultProps;
