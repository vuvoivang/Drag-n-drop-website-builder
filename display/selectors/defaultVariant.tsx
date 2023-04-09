import TypeSvg from '../../public/icons/toolbox/text.svg';
import ButtonSvg from '../../public/icons/toolbox/button.svg';
import SquareSvg from '../../public/icons/toolbox/rectangle.svg';
import YoutubeSvg from '../../public/icons/toolbox/video-line.svg';
import ImageSvg from '../../public/icons/toolbox/image.svg';
import InputSvg from '../../public/icons/toolbox/input.svg';
import AnchorSvg from '../../public/icons/toolbox/anchor.svg';
import MenuSvg from '../../public/icons/toolbox/menu.svg';
import IntroductionSvg from '../../public/icons/toolbox/introduction.svg';
import ElementSvg from '../../public/icons/element.svg';
import TemplateSvg from '../../public/icons/template.svg';
import FooterSvg from '../../public/icons/toolbox/footer.svg';
import BannerSvg from '../../public/icons/toolbox/banner.svg';
import ProductSvg from '../../public/icons/toolbox/product.svg';
import ContentSvg from '../../public/icons/toolbox/content.svg';

import {
  CraftButton,
  CraftContainer,
  CraftText,
  CraftVideo,
  CraftInput,
  CraftImage,
  CraftAnchor,
} from 'display/selectors';

import { Container, Button, Text, Image, Video, Input, Anchor } from 'display/raw-components';
import { ConfigVariant } from './renderVariant';
import { Element } from '@libs/nodes';
import { IntroductionTemplateConfig, MenuTemplateConfig } from 'display/template';
import { genItemsDefaultConfigTemplateVariant } from 'display/template/genTemplateVariant';
import { FooterTemplateConfig } from 'display/template/Footer';
import { BannerTemplateConfig } from 'display/template/Banner';
import { ProductTemplateConfig } from 'display/template/Product';
import { ContentTemplateConfig } from 'display/template/Content';

export const DEFAULT_VARIANTS: ConfigVariant = [
  {
    title: 'Basic Element',
    subItems: [
      {
        label: 'Text',
        Icon: TypeSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftText,
            ViewElement: Text,
            label: 'Simple text',
          },
          {
            isSubmenu: true,
            label: 'Heading',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '24',
                  tagName: 'h1',
                  text: 'Heading 1',
                  fontWeight: '700',
                },
                overwritePropsView: {
                  fontSize: '24',
                  tagName: 'h1',
                  text: 'Heading 1',
                  fontWeight: '700',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '22',
                  tagName: 'h2',
                  text: 'Heading 2',
                  fontWeight: '600',
                },
                overwritePropsView: {
                  fontSize: '22',
                  tagName: 'h2',
                  text: 'Heading 2',
                  fontWeight: '600',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '20',
                  tagName: 'h3',
                  text: 'Heading 3',
                  fontWeight: '600',
                },
                overwritePropsView: {
                  fontSize: '20',
                  tagName: 'h3',
                  text: 'Heading 3',
                  fontWeight: '600',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '18',
                  tagName: 'h4',
                  text: 'Heading 4',
                },
                overwritePropsView: {
                  fontSize: '18',
                  tagName: 'h4',
                  text: 'Heading 4',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: 'h5',
                  text: 'Heading 5',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: 'h5',
                  text: 'Heading 5',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '14',
                  tagName: 'h6',
                  text: 'Heading 6',
                },
                overwritePropsView: {
                  fontSize: '14',
                  tagName: 'h6',
                  text: 'Heading 6',
                },
              },
            ],
          },
          {
            isSubmenu: true,
            label: 'Paragraph',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '18',
                  tagName: 'body1',
                  text: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '600',
                },
                overwritePropsView: {
                  fontSize: '18',
                  tagName: 'body1',
                  text: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '600',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: 'body2',
                  text: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '600',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: 'body2',
                  text: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '600',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '14',
                  tagName: 'body1',
                  text: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
                },
                overwritePropsView: {
                  fontSize: '14',
                  tagName: 'body1',
                  text: "I'm a paragraph. Click here to add your own text and edit me. It's easy.",
                },
              },
            ],
          },
        ],
      },
      {
        label: 'Button',
        Icon: ButtonSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftButton,
            ViewElement: Button,
            overwritePropsCraft: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '197', g: '8', b: '41', a: '1' },
              fontSize: '16',
              width: '50%',
              fontWeight: '400',
              text: 'Block',
            },
            overwritePropsView: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '197', g: '8', b: '41', a: '1' },
              fontSize: '16',
              width: '50%',
              fontWeight: '400',
              text: 'Block',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftButton,
            ViewElement: Button,
            overwritePropsCraft: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '22', g: '69', b: '209', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '400',
            },
            overwritePropsView: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '22', g: '69', b: '209', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '400',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftButton,
            ViewElement: Button,
          },
          {
            isSubmenu: false,
            CraftElement: CraftButton,
            ViewElement: Button,
            overwritePropsCraft: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '86', g: '163', b: '9', a: '1' },
              fontSize: '14',
              width: '100%',
              fontWeight: '400',
            },
            overwritePropsView: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '86', g: '163', b: '9', a: '1' },
              fontSize: '14',
              width: '100%',
              fontWeight: '400',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftButton,
            ViewElement: Button,
            overwritePropsCraft: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '9', g: '35', b: '163', a: '1' },
              fontSize: '14',
              fontWeight: '400',
              text: 'Sign up',
            },
            overwritePropsView: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '9', g: '35', b: '163', a: '1' },
              fontSize: '14',
              fontWeight: '400',
              text: 'Sign up',
            },
          },
        ],
      },
      {
        label: 'Container',
        Icon: SquareSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: Element,
            ViewElement: Container,
            overwritePropsCraft: {
              canvas: true,
              is: CraftContainer,
              background: { r: 78, g: 78, b: 78, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '300px',
              width: '300px',
            },
            overwritePropsView: {
              background: { r: 78, g: 78, b: 78, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '100px',
              width: '100px',
            },
          },
          {
            isSubmenu: false,
            CraftElement: Element,
            ViewElement: Container,
            overwritePropsCraft: {
              background: { r: 200, g: 61, b: 61, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '300px',
              width: '300px',
            },
            overwritePropsView: {
              background: { r: 200, g: 61, b: 61, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '100px',
              width: '100px',
            },
          },
          {
            isSubmenu: false,
            CraftElement: Element,
            ViewElement: Container,
            overwritePropsCraft: {
              background: { r: 200, g: 61, b: 61, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '300px',
              width: '300px',
              radius: 8,
            },
            overwritePropsView: {
              background: { r: 200, g: 61, b: 61, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '100px',
              width: '100px',
              radius: 8,
            },
          },
          {
            isSubmenu: false,
            CraftElement: Element,
            ViewElement: Container,
            overwritePropsCraft: {
              canvas: true,
              is: { CraftContainer },
              background: { r: 78, g: 78, b: 78, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '150px',
              width: '300px',
            },
            overwritePropsView: {
              background: { r: 78, g: 78, b: 78, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '90px',
              width: '180px',
            },
          },
          {
            isSubmenu: false,
            CraftElement: Element,
            ViewElement: Container,
            overwritePropsCraft: {
              canvas: true,
              is: { CraftContainer },
              background: { r: 78, g: 78, b: 78, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '450px',
              width: '450px',
              shadow: 10,
            },
            overwritePropsView: {
              background: { r: 78, g: 78, b: 78, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '180px',
              width: '180px',
              shadow: 10,
            },
          },
        ],
      },
      {
        label: 'Image',
        Icon: ImageSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '400px',
              width: '400px',
            },
            overwritePropsView: {
              height: '200px',
              width: '200px',
              className: 'cursor-move',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '400px',
              width: '400px',
              radius: 20,
            },
            overwritePropsView: {
              height: '200px',
              width: '200px',
              radius: 20,
              className: 'cursor-move',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '200px',
              width: '400px',
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o1MyYtFMFxk-9c62sOBJGi51LqxvlU4b1WKeTwqjOTu3aNdtJ83ITrp7Q0vEGn_f8zU&usqp=CAU',
            },
            overwritePropsView: {
              height: '100px',
              width: '200px',
              src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o1MyYtFMFxk-9c62sOBJGi51LqxvlU4b1WKeTwqjOTu3aNdtJ83ITrp7Q0vEGn_f8zU&usqp=CAU',
              className: 'cursor-move',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '200px',
              width: '300px',
              src: 'https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg',
            },
            overwritePropsView: {
              height: '100px',
              width: '150px',
              src: 'https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg',
              className: 'cursor-move',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '200px',
              width: '300px',
              src: 'https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg',
              radius: '200',
            },
            overwritePropsView: {
              height: '100px',
              width: '150px',
              src: 'https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg',
              radius: '200',
              className: 'cursor-move',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '300px',
              width: '300px',
              src: 'https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg',
              objectFit: 'cover',
            },
            overwritePropsView: {
              height: '150px',
              width: '150px',
              src: 'https://cdn.britannica.com/35/233235-050-8DED07E3/Pug-dog.jpg',
              objectFit: 'cover',
              className: 'cursor-move',
            },
          },
        ],
      },
      {
        label: 'Video',
        Icon: YoutubeSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftVideo,
            ViewElement: Video,
            overwritePropsCraft: {
              height: '300px',
              width: '300px',
              videoId: '6fWxJkhRKgk',
            },
            overwritePropsView: {
              height: '300px',
              width: '300px',
              enabled: true,
              className: 'cursor-move',
              videoId: '6fWxJkhRKgk',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftVideo,
            ViewElement: Video,
            overwritePropsCraft: {
              height: '150px',
              width: '300px',
            },
            overwritePropsView: {
              height: '100px',
              width: '200px',
              enabled: true,
              className: 'cursor-move',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftVideo,
            ViewElement: Video,
            overwritePropsCraft: {
              height: '150px',
              width: '300px',
            },
            overwritePropsView: {
              height: '75px',
              width: '150px',
              enabled: true,
              className: 'cursor-move',
            },
          },
        ],
      },
      {
        label: 'Input',
        Icon: InputSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              height: '100px',
              width: '300px',
            },
            overwritePropsView: {
              height: '50px',
              width: '150px',
              inputOptions: { readonly: true },
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              background: { r: 200, g: 61, b: 61, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '100px',
              width: '300px',
            },
            overwritePropsView: {
              background: { r: 200, g: 61, b: 61, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '50px',
              width: '150px',
              inputOptions: { readonly: true },
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              background: { r: 200, g: 100, b: 255, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '100px',
              width: '300px',
            },
            overwritePropsView: {
              background: { r: 200, g: 100, b: 255, a: 1 },
              color: { r: '0', g: '0', b: '0', a: '1' },
              height: '50px',
              width: '150px',
              inputOptions: { readonly: true },
            },
          },
        ],
      },
      {
        label: 'Link',
        Icon: AnchorSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '0', g: '0', b: '0', a: '1' },
              background: { r: '0', g: '0', b: '0', a: '0' },
              fontSize: '16',
              width: 'auto',
              fontWeight: '400',
              anchorStyle: 'outline',
              text: 'Link without shadow',
            },
            overwritePropsView: {
              color: { r: '0', g: '0', b: '0', a: '1' },
              background: { r: '0', g: '0', b: '0', a: '0' },
              fontSize: '16',
              width: 'auto',
              fontWeight: '400',
              anchorStyle: 'outline',
              text: 'Link without shadow',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '255', g: '0', b: '0', a: '1' },
              background: { r: '0', g: '0', b: '0', a: '0' },
              fontSize: '16',
              width: 'auto',
              fontWeight: '400',
              anchorStyle: 'outline',
              text: 'Link without shadow',
            },
            overwritePropsView: {
              color: { r: '255', g: '0', b: '0', a: '1' },
              background: { r: '0', g: '0', b: '0', a: '0' },
              fontSize: '16',
              width: 'auto',
              fontWeight: '400',
              anchorStyle: 'outline',
              text: 'Link without shadow',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '197', g: '8', b: '41', a: '1' },
              fontSize: '16',
              width: '50%',
              fontWeight: '400',
              text: 'Link',
            },
            overwritePropsView: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '197', g: '8', b: '41', a: '1' },
              fontSize: '16',
              width: '50%',
              fontWeight: '400',
              text: 'Link',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '0', g: '255', b: '255', a: '1' },
              background: { r: '0', g: '8', b: '41', a: '1' },
              fontSize: '16',
              width: '50%',
              fontWeight: '400',
              text: 'Link',
            },
            overwritePropsView: {
              color: { r: '0', g: '255', b: '255', a: '1' },
              background: { r: '0', g: '8', b: '41', a: '1' },
              fontSize: '16',
              width: '50%',
              fontWeight: '400',
              text: 'Link',
            },
          },
        ],
      },
    ],
    Icon: ElementSvg,
  },
  {
    title: 'Built-in Template',
    subItems: [
      {
        label: 'Menu',
        Icon: MenuSvg,
        subItems: genItemsDefaultConfigTemplateVariant(MenuTemplateConfig),
      },
      {
        label: 'Introduction',
        Icon: IntroductionSvg,
        subItems: genItemsDefaultConfigTemplateVariant(IntroductionTemplateConfig),
      },
      {
        label: 'Footer',
        Icon: FooterSvg,
        subItems: genItemsDefaultConfigTemplateVariant(FooterTemplateConfig),
      },
      {
        label: 'Banner',
        Icon: BannerSvg,
        subItems: genItemsDefaultConfigTemplateVariant(BannerTemplateConfig),
      },
      {
        label: 'Product',
        Icon: ProductSvg,
        subItems: genItemsDefaultConfigTemplateVariant(ProductTemplateConfig),
      },
      {
        label: 'Content',
        Icon: ContentSvg,
        subItems: genItemsDefaultConfigTemplateVariant(ContentTemplateConfig),
      },
    ],
    Icon: TemplateSvg,
  }
];
