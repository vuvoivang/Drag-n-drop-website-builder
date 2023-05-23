import { ButtonProps } from './../Button/props';
import { Text } from '../Text';
import { Button } from '../Button';
import { Container } from '../Container';
import { TextProps } from '../Text/props';
import { ContainerProps } from '../Container/props';

export type PopupProps = Partial<{
  id: string;
  titleComponent: TextProps;
  contentComponent: TextProps;
  firstButtonComponent: ButtonProps;
  secondButtonComponent: ButtonProps;
  containerActionsComponent: ContainerProps;
  styledClassNames: Record<string, any>;
  className: string;
  events: {
    showPopup: boolean;
  }
}>;

export const defaultProps: PopupProps = {
  className: 'popup',
  titleComponent: {
    ...Text.defaultProps,
    text: 'Popup title',
    fontWeight: '700',
    textAlign: 'center',
    tagName: 'h1',
    fontSize: '22',
    margin: ['0', '0', '32', '0'],
  },
  contentComponent: {
    ...Text.defaultProps,
    text: "This is a popup's content. You can edit this pop-up including title, content, call-to-action via Customize panel.",
    textAlign: 'left',
    fontSize: '15',
    tagName: 'h4',
    margin: ['0', '0', '16', '0'],
  },
  firstButtonComponent: {
    ...Button.defaultProps,
    text: 'Close',
    color: { r: '255', g: '255', b: '255', a: '1' },
    background: { r: '9', g: '35', b: '163', a: '1' },
    width: '20%',
    margin: ['0', '20', '0', '0'],
  },
  secondButtonComponent: {
    ...Button.defaultProps,
    text: 'Close',
    color: { r: '255', g: '255', b: '255', a: '1' },
    background: { r: '197', g: '8', b: '41', a: '1' },
    width: '20%',
    margin: ['0', '0', '0', '0'],
  },
  containerActionsComponent: {
    ...Container.defaultProps,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};
