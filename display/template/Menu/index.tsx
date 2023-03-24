export * from './craft';
export * from './raw';

import { Container, Anchor } from 'display/raw-components';
import { genTemplateVariant } from '../genTemplateVariant';
import { TemplateMenu } from './raw';

export const MenuTemplate = [
  {
    raw: {
      type: Container,
      overwriteProps: {
        background: { r: 255, g: 255, b: 255, a: 1 },
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        padding: ['4', '4', '4', '4'],
        margin: ['0', '0', '4', '0'],
      },
      children: [
        {
          type: Anchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '12',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            padding: ['4', '4', '4', '4'],
            text: 'Home',
          },
          children: [],
        },
        {
          type: Anchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '12',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            padding: ['4', '4', '4', '4'],
            text: 'About',
          },
          children: [],
        },
        {
          type: Anchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '12',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            padding: ['4', '4', '4', '4'],
            text: 'Products',
          },
          children: [],
        },
        {
          type: Anchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '12',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            padding: ['4', '4', '4', '4'],
            text: 'Personal',
          },
          children: [],
        },
      ],
    },
    craft: {} as any,
  },
];
console.log(genTemplateVariant(MenuTemplate)?.[0].raw);
console.log(TemplateMenu);