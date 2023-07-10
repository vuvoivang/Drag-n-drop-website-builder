export type CodeProps = Partial<{
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  fontStyle: string;
  color: Record<'r' | 'g' | 'b' | 'a', string>;
  shadow: number;
  text: any;
  margin: string[];
  styledClassNames: Record<string, any>;
  className: string;
  tagName: string;
  nestedPropKey?: string;
}>;

export const defaultProps: CodeProps = {
  fontSize: '15',
  textAlign: 'left',
  fontWeight: '500',
  color: { r: '92', g: '90', b: '90', a: '1' },
  margin: ['0', '0', '0', '0'],
  shadow: 0,
  text: `<html>
  <body>
  
  <h2>JavaScript Numbers</h2>
  
  <p>The toString() method can output numbers from base 2 to 36:</p>
  
  <p id="demo"></p>
  </html>`,
  styledClassNames: {},
  tagName: 'h3',
  fontStyle: 'normal',
};
