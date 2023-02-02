export type TextProps = {
    fontSize: string;
    textAlign: string;
    fontWeight: string;
    color: Record<'r' | 'g' | 'b' | 'a', string>;
    shadow: number;
    text: string;
    margin: [string, string, string, string];
    styledClassNames: Record<string, any>;
  };