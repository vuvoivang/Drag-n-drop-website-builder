import cx from 'classnames';
import React from 'react';

import { StyledTextarea } from './styled';

import { defaultProps } from './props';

export const Textarea = (props: any) => {
  const { styledClassNames, type, placeholder, textareaOptions, className, ...otherProps } = props;
  const styledClassNamesValues = (Object.values(styledClassNames) as string[]).flat();
  const { required, readonly } = textareaOptions;
  return (
    <StyledTextarea
      className={cx([
        className,
        'input rounded w-full px-4 py-2 mt-4',
        styledClassNamesValues,
      ])}
      required={required}
      placeholder={placeholder}
      readOnly={readonly}
      {...otherProps}
    />
  );
};

Textarea.defaultProps = defaultProps;
