export type TextareaProps = Partial<{
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  width: string;
  height: string;
  background: Record<'r' | 'g' | 'b' | 'a', string>;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  borderColor: Record<'r' | 'g' | 'b' | 'a', string>;
  borderColorFocus: Record<'r' | 'g' | 'b' | 'a', string>;
  padding: any[];
  margin: any[];
  type: string;
  textareaOptions: {
    required?: boolean;
    readonly?: boolean;
  };
  placeholder: string;
  className: string;
  styledClassNames: Record<string, any>;
}>;

export const defaultProps: TextareaProps = {
  fontSize: '14',
  textAlign: 'left',
  fontWeight: '500',
  background: { r: '255', g: '255', b: '255', a: '0.5' },
  color: { r: '0', g: '0', b: '0', a: '1' },
  borderColor: { r: '221', g: '223', b: '226', a: '1' },
  borderColorFocus: { r: '126', g: '176', b: '114', a: '1' },
  type: 'text',
  padding: ['10', '10', '10', '10'],
  margin: ['10', '0', '10', '0'],
  width: '100%',
  height: 'auto',
  styledClassNames: {},
  textareaOptions: {
    required: true,
    readonly: false,
  },
  placeholder: 'Input value here',
};
