import { useNode, useEditor, UserComponent } from 'libs/core/src';
import React from 'react';
import ContentEditable from 'react-contenteditable';
import { TextProps } from '../../raw-components/Text/props';
import cx from 'classnames';
import { TextSettings } from './setting';
import { defaultProps } from 'display/raw-components/Text/props';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';
import { REMOVED_DYNAMIC_DATA_TEXT_INFORM } from 'display/raw-components/constant';

export const craftConfig = {
  displayName: 'Text',
  props: defaultProps,
  related: {
    settings: TextSettings,
  },
};
export const CraftText: UserComponent<TextProps> = (props: Partial<TextProps>) => {
  const {
    fontSize,
    textAlign,
    fontWeight,
    color,
    shadow,
    text,
    margin,
    styledClassNames,
    tagName,
    nestedPropKey = '',
  } = useGetValuesFromReferencedProps(props);
  
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const isDeprecatedTextDynamicData = props.text?.type === "dynamic-data" && text === REMOVED_DYNAMIC_DATA_TEXT_INFORM;
  return (
    <ContentEditable
      innerRef={connect}
      html={text} // innerHTML of the editable div
      disabled={!enabled}
      onChange={(e) => {
        if(e.target.value === text) return;
        setProp((prop) => {
          if (nestedPropKey) {
            prop[nestedPropKey].text = e.target.value;
          } else {
            prop.text = e.target.value;
          }
        }, 500);
      }} // use true to disable editing
      tagName={tagName} // Use a custom HTML tag (uses a div by default)
      className={cx(styledClassNamesValues, isDeprecatedTextDynamicData && 'blink_item')}
      style={{
        width: '100%',
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
        color: `rgba(${Object.values(color)})`,
        fontSize: `${fontSize}px`,
        textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
        fontWeight,
        textAlign,
      }}
    />
  );
};

CraftText.craft = craftConfig;
