import { Container, Anchor } from 'display/raw-components';
import {
  CraftContainer,
  CraftAnchor,
} from 'display/selectors';


export const MenuTemplateConfig = [
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
    craft: {
      type: CraftContainer,
      overwriteProps: {
        background: { r: 255, g: 255, b: 255, a: 1 },
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 'auto',
        padding: ['16', '16', '16', '16'],
        margin: ['0', '0', '16', '0'],
      },
      children: [
        {
          type: CraftAnchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '16',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            text: 'Home',
          },
          children: [],
        },
        {
          type: CraftAnchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '16',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            text: 'About',
          },
          children: [],
        },
        {
          type: CraftAnchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '16',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            text: 'Products',
          },
          children: [],
        },
        {
          type: CraftAnchor,
          overwriteProps: {
            color: { r: 0, g: 0, b: 0, a: 1 },
            background: { r: 0, g: 0, b: 0, a: 0 },
            fontSize: '16',
            width: 'auto',
            fontWeight: '400',
            anchorStyle: 'outline',
            text: 'Personal',
          },
          children: [],
        },
      ],
    },
  },
];