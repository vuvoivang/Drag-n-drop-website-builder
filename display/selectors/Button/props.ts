export type ButtonProps = {
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  width: string;
  height: string;
  background?: Record<"r" | "g" | "b" | "a", number>;
  color?: Record<"r" | "g" | "b" | "a", number>;
  buttonStyle?: string;
  padding?: any[];
  margin?: any[];
  text?: string;
  textComponent?: any;
  styledClassNames?: Record<string, any>;
};
