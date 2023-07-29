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
        background: { r: '255', g: '255', b: '255', a: '1' },
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
            background: { r: '255', g: '255', b: '255', a: '1' },
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
            background: { r: '255', g: '255', b: '255', a: '1' },
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
        background: { r: '255', g: '255', b: '255', a: '1' },
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
            background: { r: '255', g: '255', b: '255', a: '1' },
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
            background: { r: '255', g: '255', b: '255', a: '1' },
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
  {
    raw: {
      type: Container,
      overwriteProps: {
        background: { r: '255', g: '255', b: '255', a: '1' },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '120px',
        padding: ['0', '0', '0', '0'],
        margin: ['0', '0', '0', '0'],
        className: 'cursor-move',
      },
      children: [
        {
          type: Image,
          overwriteProps: {
            width: '120px',
            height: '100%',
            src: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            radius: '0',
            objectFit: 'cover',
          },
        },
        {
          type: Container,
          overwriteProps: {
            background: { r: '246', g: '243', b: '249', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '180px',
            height: '100%',
            padding: ['2', '2', '2', '2'],
            margin: ['0', '0', '0', '0'],
          },
          children: [
            {
              type: Text,
              overwriteProps: {
                tagName: 'h1',
                fontSize: '12',
                text: 'Website Builder',
                fontFamily: 'Comic Sans MS',
                fontWeight: '600',
                textAlign: 'center',
                color: { r: '3', g: '123', b: '255', a: '1' },
              },
              children: [],
            },
            {
              type: Text,
              overwriteProps: {
                fontSize: '8',
                fontFamily: 'Open Sans',
                text: 'Buildify makes it easy to create a website',
                margin: ['4', '0', '0', '0'],
                textAlign: 'center',
                color: { r: '160', g: '71', b: '71', a: '1' },
              },
              children: [],
            },
            {
              type: Button,
              overwriteProps: {
                color: { r: '255', g: '255', b: '255', a: '1' },
                background: { r: '40', g: '167', b: '69', a: 1 },
                fontSize: '6',
                width: 'auto',
                height: 'auto',
                fontWeight: '500',
                padding: ['6', '8', '6', '8'],
                margin: ['10', '0', '0', '0'],
                borderRadius: '8',
                text: 'Join Now',
                className: 'cursor-move',
              },
              children: [],
            },
          ],
        },
      ],
    },
    craft: {
      type: CraftContainer,
      overwriteProps: {
        background: { r: '255', g: '255', b: '255', a: '1' },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '340px',
        padding: ['0', '0', '0', '0'],
        margin: ['0', '0', '8', '0'],
      },
      children: [
        {
          type: CraftImage,
          overwriteProps: {
            width: '360px',
            height: '100%',
            src: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            radius: '0',
            objectFit: 'cover',
          },
        },
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: '246', g: '243', b: '249', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '435px',
            height: '100%',
            padding: ['2', '2', '2', '2'],
            margin: ['0', '0', '0', '0'],
          },
          children: [
            {
              type: CraftText,
              overwriteProps: {
                tagName: 'h1',
                fontSize: '28',
                text: 'Website Builder',
                fontWeight: '600',
                fontFamily: 'Comic Sans MS',
                textAlign: 'center',
                color: { r: '3', g: '123', b: '255', a: '1' },
              },
              children: [],
            },
            {
              type: CraftText,
              overwriteProps: {
                fontSize: '16',
                fontFamily: 'Open Sans',
                text: 'Buildify makes it easy to create a website',
                margin: ['4', '0', '0', '0'],
                textAlign: 'center',
                color: { r: '160', g: '71', b: '71', a: '1' },
              },
              children: [],
            },
            {
              type: CraftButton,
              overwriteProps: {
                color: { r: '255', g: '255', b: '255', a: '1' },
                background: { r: '40', g: '167', b: '69', a: 1 },
                fontSize: '14',
                width: 'auto',
                height: 'auto',
                fontWeight: '500',
                padding: ['8', '14', '8', '14'],
                margin: ['22', '0', '0', '0'],
                borderRadius: '16',
                text: 'Join Now',
              },
              children: [],
            },
          ],
        },
      ],
    },
  },
];
