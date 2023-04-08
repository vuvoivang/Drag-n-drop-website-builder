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

export const ProductTemplateConfig = [
  {
    raw: {
      type: Container,
      overwriteProps: {
        background: { r: 255, g: 255, b: 255, a: 1 },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: ['4', '4', '4', '4'],
        margin: ['0', '0', '4', '0'],
        className: 'cursor-move',
      },
      children: [
        {
          type: Text,
          overwriteProps: {
            fontSize: '14',
            tagName: 'h1',
            text: 'Our products',
            fontWeight: '500',
            textAlign: 'center',
            color: { r: 0, g: 55, b: 196, a: 1 },
          },
        },
        {
          type: Container,
          overwriteProps: {
            background: { r: 255, g: 255, b: 255, a: 1 },
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '100%',
            height: 'auto',
            padding: ['4', '4', '4', '4'],
            margin: ['0', '0', '4', '0'],
          },
          children: [
            {
              type: Container,
              overwriteProps: {
                background: { r: 255, g: 255, b: 255, a: 1 },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '33%',
                height: 'auto',
                padding: ['4', '2', '4', '2'],
                margin: ['0', '0', '2', '0'],
              },
              children: [
                {
                  type: Image,
                  overwriteProps: {
                    width: '100%',
                    src: 'https://onewaymobile.vn/images/products/2023/01/27/large/14-pro_1662613601_1674806395.png',
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '11',
                    tagName: 'h1',
                    text: ' Apple iPhone 14 Pro 128GB',
                    fontWeight: '500',
                    color: { r: 0, g: 0, b: 0, a: 1 },
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '7',
                    tagName: 'paragraph',
                    text: "6.1-inch size, the iPhone 12 offers 5G, an OLED display, improved cameras, and Apple's A14 chip",
                    color: { r: 0, g: 0, b: 0, a: 1 },
                    fontWeight: '400',
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '10',
                    text: '10.000.000 USD',
                    color: { r: 7, g: 24, b: 237, a: 1 },
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: Button,
                  overwriteProps: {
                    color: { r: '255', g: '255', b: '255', a: '1' },
                    background: { r: '232', g: '15', b: '15', a: '1' },
                    fontSize: '10',
                    fontWeight: '400',
                    text: 'Add to cart',
                    width: 'fit-content',
                    padding: ['8', '8', '8', '8'],
                    margin: ['5', '4', '5', '0'],
                  },
                },
              ],
            },
            {
              type: Container,
              overwriteProps: {
                background: { r: 255, g: 255, b: 255, a: 1 },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '33%',
                height: 'auto',
                padding: ['4', '2', '4', '2'],
                margin: ['0', '0', '2', '0'],
              },
              children: [
                {
                  type: Image,
                  overwriteProps: {
                    width: '100%',
                    src: 'https://onewaymobile.vn/images/products/2023/01/27/large/14-pro_1662613601_1674806395.png',
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '11',
                    tagName: 'h1',
                    text: ' Apple iPhone 14 Pro 128GB',
                    fontWeight: '500',
                    color: { r: 0, g: 0, b: 0, a: 1 },
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '7',
                    tagName: 'paragraph',
                    text: "6.1-inch size, the iPhone 12 offers 5G, an OLED display, improved cameras, and Apple's A14 chip",
                    color: { r: 0, g: 0, b: 0, a: 1 },
                    fontWeight: '400',
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '10',
                    text: '10.000.000 USD',
                    color: { r: 7, g: 24, b: 237, a: 1 },
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: Button,
                  overwriteProps: {
                    color: { r: '255', g: '255', b: '255', a: '1' },
                    background: { r: '232', g: '15', b: '15', a: '1' },
                    fontSize: '10',
                    fontWeight: '400',
                    text: 'Add to cart',
                    width: 'fit-content',
                    padding: ['8', '8', '8', '8'],
                    margin: ['5', '4', '5', '0'],
                  },
                },
              ],
            },
            {
              type: Container,
              overwriteProps: {
                background: { r: 255, g: 255, b: 255, a: 1 },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '33%',
                height: 'auto',
                padding: ['4', '2', '4', '2'],
                margin: ['0', '0', '2', '0'],
              },
              children: [
                {
                  type: Image,
                  overwriteProps: {
                    width: '100%',
                    src: 'https://onewaymobile.vn/images/products/2023/01/27/large/14-pro_1662613601_1674806395.png',
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '11',
                    tagName: 'h1',
                    text: ' Apple iPhone 14 Pro 128GB',
                    fontWeight: '500',
                    color: { r: 0, g: 0, b: 0, a: 1 },
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '7',
                    tagName: 'paragraph',
                    text: "6.1-inch size, the iPhone 12 offers 5G, an OLED display, improved cameras, and Apple's A14 chip",
                    color: { r: 0, g: 0, b: 0, a: 1 },
                    fontWeight: '400',
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '10',
                    text: '10.000.000 USD',
                    color: { r: 7, g: 24, b: 237, a: 1 },
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: Button,
                  overwriteProps: {
                    color: { r: '255', g: '255', b: '255', a: '1' },
                    background: { r: '232', g: '15', b: '15', a: '1' },
                    fontSize: '10',
                    fontWeight: '400',
                    text: 'Add to cart',
                    width: 'fit-content',
                    padding: ['8', '8', '8', '8'],
                    margin: ['5', '4', '5', '0'],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    craft: {
      type: CraftContainer,
      overwriteProps: {
        background: { r: 255, g: 255, b: 255, a: 1 },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: 'auto',
        padding: ['16', '16', '16', '16'],
        margin: ['0', '0', '16', '0'],
      },
      children: [
        {
          type: CraftText,
          overwriteProps: {
            fontSize: '22',
            tagName: 'h1',
            text: 'Our products',
            fontWeight: '500',
            textAlign: 'center',
            color: { r: 0, g: 55, b: 196, a: 1 },
          },
        },
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: 255, g: 255, b: 255, a: 1 },
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
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
                alignItems: 'flex-start',
                width: '33%',
                height: 'auto',
                padding: ['16', '8', '16', '8'],
                margin: ['0', '0', '8', '0'],
              },
              children: [
                {
                  type: CraftImage,
                  overwriteProps: {
                    width: '100%',
                    src: 'https://onewaymobile.vn/images/products/2023/01/27/large/14-pro_1662613601_1674806395.png',
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '18',
                    tagName: 'h1',
                    text: ' Apple iPhone 14 Pro 128GB',
                    fontWeight: '500',
                    color: { r: 0, g: 0, b: 0, a: 1 },
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '10',
                    tagName: 'paragraph',
                    text: "6.1-inch size, the iPhone 12 offers 5G, an OLED display, improved cameras, and Apple's A14 chip",
                    color: { r: 0, g: 0, b: 0, a: 1 },
                    fontWeight: '400',
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '16',
                    text: '10.000.000 USD',
                    color: { r: 7, g: 24, b: 237, a: 1 },
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: CraftButton,
                  overwriteProps: {
                    color: { r: '255', g: '255', b: '255', a: '1' },
                    background: { r: '232', g: '15', b: '15', a: '1' },
                    fontSize: '14',
                    fontWeight: '400',
                    text: 'Add to cart',
                    width: 'fit-content',
                    padding: ['8', '8', '8', '8'],
                    margin: ['5', '4', '5', '0'],
                  },
                },
              ],
            },
            {
              type: CraftContainer,
              overwriteProps: {
                background: { r: 255, g: 255, b: 255, a: 1 },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '33%',
                height: 'auto',
                padding: ['16', '8', '16', '8'],
                margin: ['0', '0', '8', '0'],
              },
              children: [
                {
                  type: CraftImage,
                  overwriteProps: {
                    width: '100%',
                    src: 'https://onewaymobile.vn/images/products/2023/01/27/large/14-pro_1662613601_1674806395.png',
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '18',
                    tagName: 'h1',
                    text: ' Apple iPhone 14 Pro 128GB',
                    fontWeight: '500',
                    color: { r: 0, g: 0, b: 0, a: 1 },
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '10',
                    tagName: 'paragraph',
                    text: "6.1-inch size, the iPhone 12 offers 5G, an OLED display, improved cameras, and Apple's A14 chip",
                    color: { r: 0, g: 0, b: 0, a: 1 },
                    fontWeight: '400',
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '16',
                    text: '10.000.000 USD',
                    color: { r: 7, g: 24, b: 237, a: 1 },
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: CraftButton,
                  overwriteProps: {
                    color: { r: '255', g: '255', b: '255', a: '1' },
                    background: { r: '232', g: '15', b: '15', a: '1' },
                    fontSize: '14',
                    fontWeight: '400',
                    text: 'Add to cart',
                    width: 'fit-content',
                    padding: ['8', '8', '8', '8'],
                    margin: ['5', '4', '5', '0'],
                  },
                },
              ],
            },
            {
              type: CraftContainer,
              overwriteProps: {
                background: { r: 255, g: 255, b: 255, a: 1 },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '33%',
                height: 'auto',
                padding: ['16', '8', '16', '8'],
                margin: ['0', '0', '8', '0'],
              },
              children: [
                {
                  type: CraftImage,
                  overwriteProps: {
                    width: '100%',
                    src: 'https://onewaymobile.vn/images/products/2023/01/27/large/14-pro_1662613601_1674806395.png',
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '18',
                    tagName: 'h1',
                    text: ' Apple iPhone 14 Pro 128GB',
                    fontWeight: '500',
                    color: { r: 0, g: 0, b: 0, a: 1 },
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '10',
                    tagName: 'paragraph',
                    text: "6.1-inch size, the iPhone 12 offers 5G, an OLED display, improved cameras, and Apple's A14 chip",
                    color: { r: 0, g: 0, b: 0, a: 1 },
                    fontWeight: '400',
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '16',
                    text: '10.000.000 USD',
                    color: { r: 7, g: 24, b: 237, a: 1 },
                    margin: ['8', '0', '8', '0'],
                  },
                },
                {
                  type: CraftButton,
                  overwriteProps: {
                    color: { r: '255', g: '255', b: '255', a: '1' },
                    background: { r: '232', g: '15', b: '15', a: '1' },
                    fontSize: '14',
                    fontWeight: '400',
                    text: 'Add to cart',
                    width: 'fit-content',
                    padding: ['8', '8', '8', '8'],
                    margin: ['5', '4', '5', '0'],
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  },
];