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

export const FooterTemplateConfig = [
  {
    raw: {
      type: Container,
      overwriteProps: {
        background: { r: '255', g: '255', b: '255', a: '1' },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: ['4', '4', '4', '4'],
        margin: ['0', '0', '0', '0'],
        className: 'cursor-move',
      },
      children: [
        {
          type: Container,
          overwriteProps: {
            background: { r: '255', g: '255', b: '255', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '33%',
            height: 'auto',
            padding: ['4', '4', '4', '4'],
            margin: ['0', '0', '2', '0'],
          },
          children: [
            {
              type: Text,
              overwriteProps: {
                fontSize: '12',
                tagName: 'h1',
                text: 'Contact us',
                fontWeight: '500',
                color: { r: '0', g: '0', b: '0', a: '1' },
              },
            },
            {
              type: Container,
              overwriteProps: {
                background: { r: '255', g: '255', b: '255', a: '1' },
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: 'auto',
                padding: ['16', '0', '16', '0'],
                margin: ['0', '0', '0', '0'],
              },
              children: [
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '8',
                    tagName: 'h4',
                    text: 'Phone: 0836256444',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '2', '0'],
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '8',
                    tagName: 'h4',
                    text: 'Address: 227 Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh, Việt Nam',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '2', '0'],
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '8',
                    tagName: 'h4',
                    text: 'Email: vohoangvu.dev99@gmail.com',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '2', '0'],
                  },
                },
              ],
            },
          ],
        },
        {
          type: Container,
          overwriteProps: {
            background: { r: '255', g: '255', b: '255', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '33%',
            height: 'auto',
            padding: ['4', '4', '4', '4'],
            margin: ['0', '0', '2', '0'],
          },
          children: [
            {
              type: Text,
              overwriteProps: {
                fontSize: '12',
                tagName: 'h1',
                text: 'Our branches',
                fontWeight: '500',
                color: { r: '0', g: '0', b: '0', a: '1' },
              },
            },
            {
              type: Container,
              overwriteProps: {
                background: { r: '255', g: '255', b: '255', a: '1' },
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: 'auto',
                padding: ['16', '0', '16', '0'],
                margin: ['0', '0', '0', '0'],
              },
              children: [
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '8',
                    tagName: 'h4',
                    text: '1st: Trung Tâm Tin Học',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '2', '0'],
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '8',
                    tagName: 'h4',
                    text: '2st: Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '2', '0'],
                  },
                },
              ],
            },
          ],
        },
        {
          type: Container,
          overwriteProps: {
            background: { r: '255', g: '255', b: '255', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '33%',
            height: 'auto',
            padding: ['4', '4', '4', '4'],
            margin: ['0', '0', '2', '0'],
          },
          children: [
            {
              type: Image,
              overwriteProps: {
                width: '100%',
                src: 'https://danviet.mediacdn.vn/296231569849192448/2022/9/15/dh-khtn-16632283614791701782653.jpg',
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
        alignItems: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: ['16', '16', '16', '16'],
        margin: ['0', '0', '0', '0'],
      },
      children: [
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: '255', g: '255', b: '255', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '33%',
            height: 'auto',
            padding: ['8', '8', '8', '8'],
            margin: ['0', '0', '0', '0'],
          },
          children: [
            {
              type: CraftText,
              overwriteProps: {
                fontSize: '22',
                tagName: 'h1',
                text: 'Contact us',
                fontWeight: '500',
                color: { r: '0', g: '0', b: '0', a: '1' },
              },
            },
            {
              type: CraftContainer,
              overwriteProps: {
                background: { r: '255', g: '255', b: '255', a: '1' },
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: 'auto',
                padding: ['16', '0', '16', '0'],
                margin: ['0', '0', '0', '0'],
              },
              children: [
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: 'Phone: 0836256444',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '8', '0'],
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: 'Address: 227 Nguyễn Văn Cừ, Quận 5, TP Hồ Chí Minh, Việt Nam',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '8', '0'],
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: 'Email: vohoangvu.dev99@gmail.com',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '8', '0'],
                  },
                },
              ],
            },
          ],
        },
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: '255', g: '255', b: '255', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '33%',
            height: 'auto',
            padding: ['16', '16', '16', '16'],
            margin: ['0', '0', '0', '0'],
          },
          children: [
            {
              type: CraftText,
              overwriteProps: {
                fontSize: '22',
                tagName: 'h1',
                text: 'Our branches',
                fontWeight: '500',
                color: { r: '0', g: '0', b: '0', a: '1' },
              },
            },
            {
              type: CraftContainer,
              overwriteProps: {
                background: { r: '255', g: '255', b: '255', a: '1' },
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                height: 'auto',
                padding: ['16', '0', '16', '0'],
                margin: ['0', '0', '0', '0'],
              },
              children: [
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: '1st: Trung Tâm Tin Học',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '8', '0'],
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: '2st: Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '8', '0'],
                  },
                },
              ],
            },
          ],
        },
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: '255', g: '255', b: '255', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            width: '33%',
            height: 'auto',
            padding: ['16', '16', '16', '16'],
            margin: ['0', '0', '8', '0'],
          },
          children: [
            {
              type: CraftImage,
              overwriteProps: {
                width: '100%',
                src: 'https://danviet.mediacdn.vn/296231569849192448/2022/9/15/dh-khtn-16632283614791701782653.jpg',
              },
            },
          ],
        },
      ],
    },
  },
];
