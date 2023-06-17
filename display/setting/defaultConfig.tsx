import { THEME_TYPE_VALUE } from '@libs/utils';
import { capitalize, weightDescription } from 'display/utils/text';

export const DEFAULT_SECTIONS = {
  typography: {
    title: 'Typography',
    props: ['fontSize', 'fontWeight', 'textAlign', 'tagName'],
    summary: ({ fontSize, fontWeight, textAlign, tagName }: any) => {
      return `${tagName || ''}, ${fontSize || ''}, ${weightDescription(fontWeight)}, ${capitalize(textAlign)}`;
    },
    items: ['tagName', 'fontSize', 'textAlign', 'fontWeight'],
  },
  margin: {
    title: 'Margin',
    props: ['margin'],
    summary: ({ margin }: any) => {
      return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${margin[3] || 0}px`;
    },
    items: [
      {
        propKey: 'margin',
        index: 0,
      },
      {
        propKey: 'margin',
        index: 1,
      },
      {
        propKey: 'margin',
        index: 2,
      },
      {
        propKey: 'margin',
        index: 3,
      },
    ],
  },
  colors: {
    title: 'Colors',
    props: ['background', 'color'],
    summary: ({ background, color }: any) => {
      return (
        <div className='flex flex-row-reverse'>
          <div
            style={{
              background: background && `rgba(${Object.values(background)})`,
            }}
            className='shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-dark'
          >
            <p
              style={{
                color: color && `rgba(${Object.values(color)})`,
              }}
              className='text-white w-full text-center'
            >
              T
            </p>
          </div>
        </div>
      );
    },
    items: ['background', 'color'],
  },
  dimensions: {
    title: 'Dimensions',
    props: ['width', 'height'],
    summary: ({ width, height }: any) => {
      return `${width || 0} x ${height || 0}`;
    },
    items: ['width', 'height'],
  },
  padding: {
    title: 'Padding',
    props: ['padding'],
    summary: ({ padding }: any) => {
      return `${padding[0] || 0}px ${padding[1] || 0}px ${padding[2] || 0}px ${padding[3] || 0}px`;
    },
    items: [
      {
        propKey: 'padding',
        index: 0,
      },
      {
        propKey: 'padding',
        index: 1,
      },
      {
        propKey: 'padding',
        index: 2,
      },
      {
        propKey: 'padding',
        index: 3,
      },
    ],
  },
  buttonDecoration: {
    title: 'Decoration',
    items: ['buttonStyle'],
  },
  anchorDecoration: {
    title: 'Decoration',
    items: ['anchorStyle'],
  },
  inputDecoration: {
    title: 'Decoration',
    items: ['inputStyle'],
  },
  containerDecoration: {
    title: 'Decoration',
    props: ['radius', 'shadow'],
    items: ['radius', 'shadow'],
  },
  containerAlignment: {
    title: 'Alignment',
    items: ['flexDirection', 'fillSpace', 'alignItems', 'justifyContent'],
  },
  appearanceText: {
    title: 'Appearance',
    props: ['color', 'shadow'],
    summary: ({ color, shadow }: any) => {
      return (
        <div className='fletext-right'>
          <p
            style={{
              color: color && `rgba(${Object.values(color)})`,
              textShadow: `0px 0px 2px rgba(0, 0, 0, ${shadow / 100})`,
            }}
            className='text-white text-right'
          >
            T
          </p>
        </div>
      );
    },
    items: ['color', 'shadow'],
  },
  youtube: {
    title: 'Youtube',
    items: ['videoId'],
  },
  inputColors: {
    title: 'Colors',
    props: ['background', 'color', 'borderColor'],
    summary: ({ background, color, borderColor }: any) => {
      return (
        <div className='flex flex-row-reverse'>
          <div
            style={{
              color: color && `rgba(${Object.values(color)})`,
              background: background && `rgba(${Object.values(background)})`,
              borderColor: borderColor && `rgba(${Object.values(borderColor)})`,
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
            className='text-white w-full text-center'
          >
            T
          </div>
        </div>
      );
    },
    items: ['background', 'color', 'borderColor', 'borderColorFocus'],
  },
  type: {
    title: 'Type',
    props: ['type'],
    summary: ({ type }: any) => {
      return type;
    },
    items: ['type'],
  },
  placeholder: {
    title: 'Placeholder',
    items: ['type'],
  },
  inputOptions: {
    title: 'Options',
    items: ['inputOptions'],
  },
  radius: {
    title: 'Decoration',
    props: ['radius'],
    items: ['radius'],
  },
  src: {
    title: 'Source',
    items: ['src'],
  },
  alt: {
    title: 'Alternative',
    props: ['alt'],
    items: ['alt'],
  },
  objectFit: {
    title: 'Object fit',
    props: ['objectFit'],
    summary: ({ objectFit }: any) => {
      return objectFit;
    },
    items: ['objectFit'],
  },
  buttonPopup: {
    title: 'Button',
    props: ['background', 'color', 'buttonStyle'],
    items: ['background', 'color', 'buttonStyle'],
  },
};

export const DEFAULT_PROP_KEYS = {
  fontSize: {
    propKey: 'fontSize',
    type: ['slider', 'text', 'select'],
    label: 'Font Size',
    full: true,
    selectchildren: [
      {
        value: '14',
        label: '14px',
      },
      {
        value: '16',
        label: '16px',
      },
      {
        value: '18',
        label: '18px',
      },
    ],
    themeTypes: [THEME_TYPE_VALUE.NUMBER],
  },
  textAlign: {
    propKey: 'textAlign',
    type: 'radio',
    label: 'Align',
    radioChildren: [
      {
        value: 'left',
        label: 'Left',
      },
      {
        value: 'center',
        label: 'Center',
      },
      {
        value: 'right',
        label: 'Right',
      },
    ],
  },
  fontWeight: {
    propKey: 'fontWeight',
    type: 'radio',
    label: 'Weight',
    radioChildren: [
      {
        value: '400',
        label: 'Regular',
      },
      {
        value: '500',
        label: 'Medium',
      },
      {
        value: '700',
        label: 'Bold',
      },
    ],
    themeTypes: [THEME_TYPE_VALUE.NUMBER],
  },
  margin: [
    {
      propKey: 'margin',
      type: 'slider',
      label: 'Top',
      index: 0,
      full: true,
      styledCustomOptions: [
        {
          value: 'mt-2',
          label: 'Tiny',
        },
        {
          value: 'mt-4',
          label: 'Medium',
        },
      ],
    },
    {
      propKey: 'margin',
      type: 'slider',
      label: 'Right',
      index: 1,
      full: true,
      styledCustomOptions: [
        {
          value: 'mr-2',
          label: 'Tiny',
        },
        {
          value: 'mr-4',
          label: 'Medium',
        },
      ],
    },
    {
      propKey: 'margin',
      type: 'slider',
      label: 'Bottom',
      index: 2,
      full: true,
      styledCustomOptions: [
        {
          value: 'mb-2',
          label: 'Tiny',
        },
        {
          value: 'mb-4',
          label: 'Medium',
        },
      ],
    },
    {
      propKey: 'margin',
      type: 'slider',
      label: 'Left',
      index: 3,
      full: true,
      styledCustomOptions: [
        {
          value: 'ml-2',
          label: 'Tiny',
        },
        {
          value: 'ml-4',
          label: 'Medium',
        },
      ],
    },
  ],
  color: {
    propKey: 'color',
    type: 'color',
    label: 'Text',
    themeTypes: [THEME_TYPE_VALUE.COLOR],
  },
  background: {
    propKey: 'background',
    type: 'bg',
    label: 'Background',
    themeTypes: [THEME_TYPE_VALUE.COLOR],
  },
  width: {
    propKey: 'width',
    type: 'text',
    label: 'Width',
    themeTypes: [THEME_TYPE_VALUE.NUMBER],
  },
  height: {
    propKey: 'height',
    type: 'text',
    label: 'Height',
    themeTypes: [THEME_TYPE_VALUE.NUMBER],
  },
  padding: [
    {
      propKey: 'padding',
      type: 'slider',
      label: 'Top',
      index: 0,
      styledCustomOptions: [
        {
          value: 'pt-2',
          label: 'Tiny',
        },
        {
          value: 'pt-4',
          label: 'Medium',
        },
      ],
    },
    {
      propKey: 'padding',
      type: 'slider',
      label: 'Right',
      index: 1,
      styledCustomOptions: [
        {
          value: 'pr-2',
          label: 'Tiny',
        },
        {
          value: 'pr-4',
          label: 'Medium',
        },
      ],
    },
    {
      propKey: 'padding',
      type: 'slider',
      label: 'Bottom',
      index: 2,
      full: true,
      styledCustomOptions: [
        {
          value: 'pb-2',
          label: 'Tiny',
        },
        {
          value: 'pb-4',
          label: 'Medium',
        },
      ],
    },
    {
      propKey: 'padding',
      type: 'slider',
      label: 'Left',
      index: 3,
      full: true,
      styledCustomOptions: [
        {
          value: 'pl-2',
          label: 'Tiny',
        },
        {
          value: 'pl-4',
          label: 'Medium',
        },
      ],
      themeTypes: [THEME_TYPE_VALUE.NUMBER],

    },
  ],
  buttonStyle: {
    propKey: 'buttonStyle',
    type: 'radio',
    label: 'Style',
    radioChildren: [
      {
        value: 'full',
        label: 'Full',
      },
      {
        value: 'outline',
        label: 'Outline',
      },
    ],
  },
  radius: {
    propKey: 'radius',
    type: 'slider',
    label: 'Radius',
    full: true,
    themeTypes: [THEME_TYPE_VALUE.NUMBER],
  },
  shadow: {
    propKey: 'shadow',
    type: 'slider',
    label: 'Shadow',
  },
  flexDirection: {
    propKey: 'flexDirection',
    type: 'radio',
    label: 'Content Direction',
    radioChildren: [
      {
        value: 'row',
        label: 'Horizontal',
      },
      {
        value: 'column',
        label: 'Vertical',
      },
    ],
  },
  fillSpace: {
    propKey: 'fillSpace',
    type: 'radio',
    label: 'Fill space',
    radioChildren: [
      {
        value: 'yes',
        label: 'Yes',
      },
      {
        value: 'no',
        label: 'No',
      },
    ],
  },
  alignItems: {
    propKey: 'alignItems',
    type: 'radio',
    label: 'Align Items',
    radioChildren: [
      {
        value: 'flex-start',
        label: 'Flex start',
      },
      {
        value: 'center',
        label: 'Center',
      },
      {
        value: 'flex-end',
        label: 'Flex end',
      },
    ],
  },
  justifyContent: {
    propKey: 'justifyContent',
    type: 'radio',
    label: 'Justify Content',
    radioChildren: [
      {
        value: 'flex-start',
        label: 'Flex start',
      },
      {
        value: 'center',
        label: 'Center',
      },
      {
        value: 'flex-end',
        label: 'Flex end',
      },
      {
        value: 'space-between',
        label: 'Space between',
      },
      {
        value: 'space-around',
        label: 'Space around',
      },
      {
        value: 'space-evenly',
        label: 'Space evenly',
      },
    ],
  },
  videoId: {
    propKey: 'videoId',
    type: 'text',
    label: 'Video ID',
  },
  inputStyle: {
    propKey: 'inputStyle',
    type: 'radio',
    label: 'Style',
    radioChildren: [
      {
        value: 'full',
        label: 'Full',
      },
      {
        value: 'outline',
        label: 'Outline',
      },
    ],
  },
  borderColor: {
    propKey: 'borderColor',
    type: 'color',
    label: 'Border',
    themeTypes: [THEME_TYPE_VALUE.COLOR],

  },
  borderColorFocus: {
    propKey: 'borderColorFocus',
    type: 'color',
    label: 'Border focus',
    themeTypes: [THEME_TYPE_VALUE.COLOR],

  },
  type: {
    propKey: 'type',
    type: ['text', 'select'],
    label: 'Type',
    selectchildren: [
      {
        value: 'text',
        label: 'Text',
      },
      {
        value: 'number',
        label: 'Number',
      },
      {
        value: 'file',
        label: 'File',
      },
      {
        value: 'phone',
        label: 'Phone',
      },
      {
        value: 'password',
        label: 'Password',
      },
      {
        value: 'email',
        label: 'Email',
      },
      {
        value: 'date',
        label: 'Date',
      },
      {
        value: 'color',
        label: 'Color',
      },
    ],
  },
  placeholder: {
    propKey: 'placeholder',
    type: 'text',
    label: 'Placeholder',
  },
  inputOptions: {
    propKey: 'inputOptions',
    type: ['checkbox'],
    label: 'Other options',
    checkboxChildren: [
      {
        value: 'required',
        label: 'Require field',
      },
      {
        value: 'readonly',
        label: 'Read only',
      },
    ],
  },
  src: {
    propKey: 'src',
    type: ['imageUpload', 'text'],
    label: 'Source (URL)',
  },
  alt: {
    propKey: 'alt',
    type: 'text',
    label: 'Alternative text',
  },
  objectFit: {
    propKey: 'objectFit',
    type: ['text', 'radio'],
    label: 'Fit image with size:',
    radioChildren: [
      {
        value: 'fill',
        label: 'Fill',
      },
      {
        value: 'contain',
        label: 'Contain',
      },
      {
        value: 'cover',
        label: 'Cover',
      },
      {
        value: 'none',
        label: 'Not resize',
      },
      {
        value: 'scale-down',
        label: 'Scale down',
      },
    ],
  },
  tagName: {
    propKey: 'tagName',
    type: ['text', 'select'],
    label: 'Tag name',
    selectchildren: [
      {
        value: 'h1',
        label: 'Heading 1',
      },
      {
        value: 'h2',
        label: 'Heading 2',
      },
      {
        value: 'h3',
        label: 'Heading 3',
      },
      {
        value: 'h4',
        label: 'Heading 4',
      },
      {
        value: 'h5',
        label: 'Heading 5',
      },
      {
        value: 'h6',
        label: 'Heading 6',
      },
      {
        value: 'p',
        label: 'Paragraph',
      },
      {
        value: 'b',
        label: 'Bold text',
      },
      {
        value: 'strong',
        label: 'Important text',
      },
      {
        value: 'sub',
        label: 'Subscript text',
      },
      {
        value: 'sup',
        label: 'Superscript text',
      },
    ],
  },
};
