import React from 'react';
import { CodeProps } from './props';
import cx from 'classnames';
import { defaultProps } from './props';

export const Code = ({
  fontSize,
  textAlign,
  fontWeight,
  fontStyle,
  color,
  shadow,
  text,
  margin,
  styledClassNames,
  className,
}: CodeProps) => {
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  return (
    <pre className='d-block'>
      <code
        className={cx([className, 'block', styledClassNamesValues])}
        style={{
          width: '100%',
          margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
          color: `rgba(${Object.values(color)})`,
          fontSize: `${fontSize}px`,
          textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
          fontWeight,
          fontStyle,
          textAlign: textAlign as any,
        }}
      >

        {text?.type === "dynamic-data" ? text?.value : text}
      </code>
    </pre>
  );
};

Code.defaultProps = defaultProps;
