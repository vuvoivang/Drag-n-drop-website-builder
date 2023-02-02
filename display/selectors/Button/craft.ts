import { ButtonSettings } from "./setting";
import { Text } from '../Text';

export const craftConfig = {
  displayName: 'Button',
  props: {
    fontSize: '14',
    textAlign: 'center',
    fontWeight: '500',
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    buttonStyle: 'full',
    text: 'Button',
    padding: ['10', '10', '10', '10'],
    margin: ['5', '0', '5', '0'],
    textComponent: {
      ...Text.craft.props,
      textAlign: 'center',
    },
    width: "100%",
    height: "auto",
    styledClassNames: {},
  },
  related: {
    toolbar: ButtonSettings,
  },
}