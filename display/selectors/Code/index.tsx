import { useNode, useEditor, UserComponent } from 'libs/core/src';
import React from 'react';
import { CodeProps } from '../../raw-components/Code/props';
import cx from 'classnames';
import { CodeSettings } from './setting';
import { defaultProps } from 'display/raw-components/Code/props';
import { useGetValuesFromReferencedProps } from 'hooks/useGetValuesFromReferencedProps';
import { REMOVED_DYNAMIC_DATA_TEXT_INFORM } from 'display/raw-components/constant';

export const craftConfig = {
  displayName: 'Code',
  props: defaultProps,
  related: {
    settings: CodeSettings,
  },
};
export const CraftCode: UserComponent<CodeProps> = (props: Partial<CodeProps>) => {
  const {
    fontSize,
    textAlign,
    fontWeight,
    fontStyle,
    color,
    shadow,
    text,
    margin,
    styledClassNames,
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
    <pre>
      <code
        contentEditable={enabled}
        ref={connect}
        onBlur={(e) => {
          if (e.target.innerText === text) return;
          setProp((prop) => {
            if (nestedPropKey) {
              prop[nestedPropKey].text = e.target.innerText;
            } else {
              prop.text = e.target.innerText;
            }
          }, 500);
        }}
        className={cx(styledClassNamesValues, isDeprecatedTextDynamicData && 'blink_item', 'block')}
        style={{
          width: '100%',
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
          color: `rgba(${Object.values(color)})`,
          fontSize: `${fontSize}px`,
          textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
          fontWeight,
          textAlign: textAlign as any,
          fontStyle,
        }}
      >
        {text}
      </code>
    </pre>
  );
};

CraftCode.craft = craftConfig;
