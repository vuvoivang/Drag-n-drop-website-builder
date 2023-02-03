export type InputProps = {
  fontSize: string;
  textAlign: string;
  fontWeight: string;
  width: string;
  height: string;
  background?: Record<"r" | "g" | "b" | "a", number>;
  color?: Record<"r" | "g" | "b" | "a", number>;
  borderColor?: Record<"r" | "g" | "b" | "a", number>;
  borderColorFocus?: Record<"r" | "g" | "b" | "a", number>;
  inputStyle?: string;
  padding?: any[];
  margin?: any[];
  type?: string;
  inputOptions: {
    required: boolean;
    readonly: boolean,
  },
  placeholder: string,
  styledClassNames?: Record<string, any>;
};
