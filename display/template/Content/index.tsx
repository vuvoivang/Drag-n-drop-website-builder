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

export const ContentTemplateConfig = [
  {
    raw: {
      type: Container,
      overwriteProps: {
        background: { r: '255', g: '255', b: '255', a: '1' },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: ['4', '4', '4', '0'],
        margin: ['0', '0', '4', '0'],
        className: 'cursor-move',
      },
      children: [
        {
          type: Text,
          overwriteProps: {
            fontSize: '12',
            tagName: 'h1',
            text: 'Build websites with a drag-and-drop interface. Content automatically optimises for device.',
            fontWeight: '500',
            textAlign: 'center',
            color: { r: 0, g: 55, b: 196, a: 1 },
          },
        },
        {
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
                margin: ['0', '0', '4', '0'],
              },
              children: [
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '10',
                    tagName: 'h1',
                    text: 'Create a site, no programming or design skills needed',
                    fontWeight: '500',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '7',
                    tagName: 'h4',
                    text: "Sites makes it simple to exhibit your team's work, with easy access to all your content from Google Workspace - whether it's a Drive folder, Doc",
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '2', '0'],
                  },
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
                margin: ['0', '0', '4', '0'],
              },
              children: [
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '10',
                    tagName: 'h1',
                    text: 'Create a site, no programming or design skills needed',
                    fontWeight: '500',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '7',
                    tagName: 'h4',
                    text: "Sites makes it simple to exhibit your team's work, with easy access to all your content from Google Workspace - whether it's a Drive folder, Doc",
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '2', '0'],
                  },
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
                margin: ['0', '0', '4', '0'],
              },
              children: [
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '10',
                    tagName: 'h1',
                    text: 'Create a site, no programming or design skills needed',
                    fontWeight: '500',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                  },
                },
                {
                  type: Text,
                  overwriteProps: {
                    fontSize: '7',
                    tagName: 'h4',
                    text: "Sites makes it simple to exhibit your team's work, with easy access to all your content from Google Workspace - whether it's a Drive folder, Doc",
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
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
          },
          children: [
            {
              type: Button,
              overwriteProps: {
                color: { r: '255', g: '255', b: '255', a: '1' },
                background: { r: '232', g: '15', b: '15', a: '1' },
                fontSize: '8',
                fontWeight: '400',
                text: 'Get more information',
                width: 'fit-content',
                padding: ['2', '2', '2', '2'],
                margin: ['2', '2', '2', '0'],
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        padding: ['16', '16', '16', '0'],
        margin: ['0', '0', '16', '0'],
      },
      children: [
        {
          type: CraftText,
          overwriteProps: {
            fontSize: '24',
            tagName: 'h1',
            text: 'Build websites with a drag-and-drop interface. Content automatically optimises for device.',
            fontWeight: '500',
            textAlign: 'center',
            color: { r: 0, g: 55, b: 196, a: 1 },
          },
        },
        {
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
                padding: ['16', '16', '16', '16'],
                margin: ['0', '0', '16', '0'],
              },
              children: [
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '18',
                    tagName: 'h1',
                    text: 'Create a site, no programming or design skills needed',
                    fontWeight: '500',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: "Sites makes it simple to exhibit your team's work, with easy access to all your content from Google Workspace - whether it's a Drive folder, Doc",
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '8', '0'],
                  },
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
                margin: ['0', '0', '16', '0'],
              },
              children: [
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '18',
                    tagName: 'h1',
                    text: 'Create a site, no programming or design skills needed',
                    fontWeight: '500',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: "Sites makes it simple to exhibit your team's work, with easy access to all your content from Google Workspace - whether it's a Drive folder, Doc",
                    color: { r: '0', g: '0', b: '0', a: '1' },
                    fontWeight: '400',
                    margin: ['0', '0', '8', '0'],
                  },
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
                margin: ['0', '0', '16', '0'],
              },
              children: [
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '18',
                    tagName: 'h1',
                    text: 'Create a site, no programming or design skills needed',
                    fontWeight: '500',
                    color: { r: '0', g: '0', b: '0', a: '1' },
                  },
                },
                {
                  type: CraftText,
                  overwriteProps: {
                    fontSize: '14',
                    tagName: 'h4',
                    text: "Sites makes it simple to exhibit your team's work, with easy access to all your content from Google Workspace - whether it's a Drive folder, Doc",
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
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
            margin: ['0', '0', '0', '0'],
          },
          children: [
            {
              type: CraftButton,
              overwriteProps: {
                color: { r: '255', g: '255', b: '255', a: '1' },
                background: { r: '232', g: '15', b: '15', a: '1' },
                fontSize: '14',
                fontWeight: '400',
                text: 'Get more information',
                width: 'fit-content',
                padding: ['8', '8', '8', '8'],
                margin: ['5', '4', '5', '0'],
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
        background: { r: '246', g: '246', b: '246', a: '1' },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '200px',
        padding: ['0', '0', '0', '0'],
        margin: ['0', '0', '0', '0'],
        className: 'cursor-move',
      },
      children: [
        {
          type: Container,
          overwriteProps: {
            background: { r: '246', g: '246', b: '246', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '220px',
            height: 'auto',
            padding: ['0', '0', '0', '0'],
            margin: ['0', '0', '0', '0'],
          },
          children: [
            {
              type: Text,
              overwriteProps: {
                fontSize: '15',
                fontFamily: 'Comic Sans MS',
                tagName: 'h1',
                text: 'Write a title here. Click to edit and add your own.',
                fontWeight: 'bold',
                color: { r: '77', g: '77', b: '77', a: '1' },
              },
            },
            {
              type: Container,
              overwriteProps: {
                background: { r: '105', g: '105', b: '105', a: '1' },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '24px',
                height: '2px',
                padding: ['0', '0', '0', '0'],
                margin: ['12', '0', '15', '0'],
              },
              children: [],
            },
            {
              type: Text,
              overwriteProps: {
                fontFamily: 'Georgia',
                fontSize: '7',
                tagName: 'h4',
                text: 'My story talks about life in my home country, consisting of what I do when I visit and what it’s like there. I talk about my favorite hobbies, food and what I do on vacation. Lastly, I was able to talk about my studies at Lindenwood and why I chose to go there.',
                color: { r: '92', g: '90', b: '90', a: '1' },
                fontWeight: '400',
                margin: ['0', '0', '0', '0'],
              },
            },
          ],
        },
      ],
    },
    craft: {
      type: CraftContainer,
      overwriteProps: {
        background: { r: '246', g: '246', b: '246', a: '1' },
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '400px',
        padding: ['0', '0', '0', '0'],
        margin: ['0', '0', '0', '0'],
      },
      children: [
        {
          type: CraftContainer,
          overwriteProps: {
            background: { r: '246', g: '246', b: '246', a: '1' },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '460px',
            height: 'auto',
            padding: ['0', '0', '0', '0'],
            margin: ['0', '0', '0', '0'],
          },
          children: [
            {
              type: CraftText,
              overwriteProps: {
                fontSize: '29',
                fontFamily: 'Comic Sans MS',
                tagName: 'h1',
                text: 'Write a title here. Click to edit and add your own.',
                fontWeight: 'bold',
                color: { r: '77', g: '77', b: '77', a: '1' },
              },
            },
            {
              type: CraftContainer,
              overwriteProps: {
                background: { r: '105', g: '105', b: '105', a: '1' },
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: '50px',
                height: '4px',
                padding: ['0', '0', '0', '0'],
                margin: ['24', '0', '30', '0'],
              },
              children: [],
            },
            {
              type: CraftText,
              overwriteProps: {
                fontFamily: 'Georgia',
                fontSize: '14',
                tagName: 'h4',
                text: 'My story talks about life in my home country, consisting of what I do when I visit and what it’s like there. I talk about my favorite hobbies, food and what I do on vacation. Lastly, I was able to talk about my studies at Lindenwood and why I chose to go there.',
                color: { r: '92', g: '90', b: '90', a: '1' },
                fontWeight: '400',
                margin: ['0', '0', '0', '0'],
              },
            },
          ],
        },
      ],
    },
  },
];
