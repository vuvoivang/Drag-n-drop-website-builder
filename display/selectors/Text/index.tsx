import { useNode, useEditor, UserComponent } from 'libs/core/src';
import React from 'react';
import ContentEditable from 'react-contenteditable';
import { TextProps } from '../../raw-components/Text/props';
import cx from 'classnames';
import { TextSettings } from './setting';
import { defaultProps } from 'display/raw-components/Text/props';
import { getDeepValueProps } from 'utils/helper';
import { cloneDeep } from 'lodash';

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
  } = getDeepValueProps(cloneDeep(props));
  // const {
  //   fontSize,
  //   textAlign,
  //   fontWeight,
  //   color,
  //   shadow,
  //   text,
  //   margin,
  //   styledClassNames,
  //   tagName,
  //   nestedPropKey = '',
  // } = props;
  // console.log(props);
  const {
    connectors: { connect },
    setProp,
  } = useNode();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const currentText = text?.type === "dynamic-data" ? text?.value : text;
  return (
    <ContentEditable
      innerRef={connect}
      html={currentText} // innerHTML of the editable div
      disabled={!enabled}
      onChange={(e) => {
        if(e.target.value === currentText) return;
        setProp((prop) => {
          if (nestedPropKey) {
            prop[nestedPropKey].text = e.target.value;
          } else {
            prop.text = e.target.value;
          }
        }, 500);
      }} // use true to disable editing
      tagName={tagName} // Use a custom HTML tag (uses a div by default)
      className={cx(styledClassNamesValues)}
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
