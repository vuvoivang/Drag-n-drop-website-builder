import { Button, Container, Text, Video, Input, Image, Anchor } from 'display/raw-components';
import {
  CraftButton,
  CraftContainer,
  CraftText,
  CraftVideo,
  CraftInput,
  CraftImage,
  CraftAnchor,
} from 'display/selectors';

export const BannerTemplateConfig = [
  {
    raw: {
      type: Container,
      overwriteProps: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: ['4', '4', '4', '4'],
        className: 'cursor-move',
      },
      children: [
        {
          type: Text,
          overwriteProps: {
            fontSize: '12',
            tagName: 'h1',
            text: 'Design website professionally',
            textAlign: 'center',
            fontWeight: '500',
            color: { r: '0', g: '0', b: '0', a: '1' },
            margin: ['0', '0', '4', '0'],
          },
        },
        {
          type: Image,
          overwriteProps: {
            height: '120px',
            width: '100%',
            src: 'https://images.pexels.com/photos/7846473/pexels-photo-7846473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            radius: 2,
          },
        },
        {
          type: Button,
          overwriteProps: {
            color: { r: '255', g: '255', b: '255', a: '1' },
            background: { r: '9', g: '35', b: '163', a: '1' },
            fontSize: '8',
            fontWeight: '400',
            text: 'Start Immediately',
            width: 'fit-content',
            padding: ['2', '2', '2', '2'],
            margin: ['5', '2', '5', '0'],
          },
        },
      ],
    },
    craft: {
      type: CraftContainer,
      overwriteProps: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      children: [
        {
          type: CraftText,
          overwriteProps: {
            fontSize: '22',
            tagName: 'h1',
            text: 'Design website professionally',
            textAlign: 'center',
            fontWeight: '500',
            color: { r: '0', g: '0', b: '0', a: '1' },
            margin: ['0', '0', '16', '0'],
          },
        },
        {
          type: CraftImage,
          overwriteProps: {
            height: '300px',
            width: '100%',
            src: 'https://images.pexels.com/photos/7846473/pexels-photo-7846473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            radius: 2,
          },
        },
        {
          type: CraftButton,
          overwriteProps: {
            color: { r: '255', g: '255', b: '255', a: '1' },
            background: { r: '9', g: '35', b: '163', a: '1' },
            fontSize: '14',
            fontWeight: '400',
            text: 'Start Immediately',
            width: 'fit-content',
            padding: ['8', '8', '8', '8'],
            margin: ['5', '4', '5', '0'],
          },
        },
      ],
    },
  },
];
