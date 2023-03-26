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

export const IntroductionTemplateConfig = [
  {
    raw: {
      type: Container,
      overwriteProps: {
        background: { r: 255, g: 255, b: 255, a: 1 },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: ['4', '4', '4', '4'],
        margin: ['0', '0', '4', '0'],
        className: 'cursor-move',
      },
      children: [
        {
          type: Container,
          overwriteProps: {
            background: { r: 255, g: 255, b: 255, a: 1 },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            height: 'auto',
            padding: ['2', '2', '2', '2'],
            margin: ['0', '2', '0', '0'],
          },
          children: [
            {
              type: Text,
              overwriteProps: {
                tagName: 'h1',
                fontSize: '14',
                text: 'Website builder',
                fontWeight: '600',
              },
              children: [],
            },
            {
              type: Text,
              overwriteProps: {
                tagName: 'paragraph',
                fontSize: '8',
                text: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
              },
              children: [],
            },
          ],
        },
        {
          type: Container,
          overwriteProps: {
            background: { r: 255, g: 255, b: 255, a: 1 },
            flexDirection: 'row',
            justifyContent: 'center',
            width: '50%',
            height: 'auto',
            padding: ['8', '8', '8', '8'],
            margin: ['0', '0', '0', '8'],
          },
          children: [
            {
              type: Image,
              overwriteProps: {
                width: '100%',
                src: 'https://assets-global.website-files.com/6243c3bb3b5a1852803d0c7f/6243c3bb3b5a18f1113d13c3_best-website-builder-for-small-business.jpg',
              },
            },
          ],
        },
      ],
    },
    craft: {
      type: CraftContainer,
      overwriteProps: {
        background: { r: 255, g: 255, b: 255, a: 1 },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: ['16', '16', '16', '16'],
        margin: ['0', '0', '16', '0'],
      },
      children: [
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: 255, g: 255, b: 255, a: 1 },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '50%',
            height: 'auto',
            padding: ['8', '8', '8', '8'],
            margin: ['0', '8', '0', '0'],
          },
          children: [
            {
              type: CraftText,
              overwriteProps: {
                tagName: 'h1',
                fontSize: '36',
                text: 'Website builder',
                fontWeight: '600',
              },
              children: [],
            },
            {
              type: CraftText,
              overwriteProps: {
                tagName: 'paragraph',
                fontSize: '13',
                text: 'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
              },
              children: [],
            },
          ],
        },
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: 255, g: 255, b: 255, a: 1 },
            flexDirection: 'row',
            justifyContent: 'center',
            width: '50%',
            height: 'auto',
            padding: ['8', '8', '8', '8'],
            margin: ['0', '0', '0', '8'],
          },
          children: [
            {
              type: CraftImage,
              overwriteProps: {
                width: '100%',
                src: 'https://assets-global.website-files.com/6243c3bb3b5a1852803d0c7f/6243c3bb3b5a18f1113d13c3_best-website-builder-for-small-business.jpg',
              },
            },
          ],
        },
      ],
    },
  },
];
