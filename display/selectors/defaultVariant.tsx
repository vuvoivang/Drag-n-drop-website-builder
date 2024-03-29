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
import MapSvg from '../../public/icons/toolbox/map.svg';
import TextareaSvg from '../../public/icons/toolbox/text-area.svg';
import CodeSvg from '../../public/icons/toolbox/code.svg';
import LabelSvg from '../../public/icons/toolbox/label.svg';
import CheckboxSvg from '../../public/icons/toolbox/checkbox.svg';
import RadioSvg from '../../public/icons/toolbox/radio.svg';

import {
  CraftButton,
  CraftContainer,
  CraftText,
  CraftVideo,
  CraftInput,
  CraftImage,
  CraftAnchor,
  CraftMap,
  CraftTextarea,
  CraftCode,
  CraftLabel,
  CraftCheckbox,
  CraftRadio,
} from 'display/selectors';

import {
  Container, Button, Text, Image, Video, Input, Anchor, Textarea, Code, Label, Checkbox, Radio, Map,
} from 'display/raw-components';
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
            isSubmenu: true,
            label: 'Status Text',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Normal text',
                  textAlign: 'center',
                  fontWeight: '500',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Normal text',
                  textAlign: 'center',
                  fontWeight: '500',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Primary text',
                  textAlign: 'center',
                  color: { r: '3', g: '123', b: '255', a: '1' },
                  fontWeight: '500',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Primary text',
                  textAlign: 'center',
                  color: { r: '3', g: '123', b: '255', a: '1' },
                  fontWeight: '500',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Success text <3',
                  textAlign: 'center',
                  color: { r: '40', g: '167', b: '69', a: '1' },
                  fontWeight: '500',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Success text <3',
                  textAlign: 'center',
                  color: { r: '40', g: '167', b: '69', a: '1' },
                  fontWeight: '500',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Info text',
                  textAlign: 'center',
                  color: { r: '23', g: '162', b: '184', a: '1' },
                  fontWeight: '500',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Info text',
                  textAlign: 'center',
                  color: { r: '23', g: '162', b: '184', a: '1' },
                  fontWeight: '500',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Danger text !',
                  textAlign: 'center',
                  color: { r: '255', g: '77', b: '79', a: '1' },
                  fontWeight: '500',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Danger text !',
                  textAlign: 'center',
                  color: { r: '255', g: '77', b: '79', a: '1' },
                  fontWeight: '500',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Warning text !!!',
                  textAlign: 'center',
                  color: { r: '236', g: '165', b: '43', a: '1' },
                  fontWeight: '500',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Warning text !!!',
                  textAlign: 'center',
                  color: { r: '236', g: '165', b: '43', a: '1' },
                  fontWeight: '500',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Dark text',
                  textAlign: 'center',
                  color: { r: '52', g: '58', b: '64', a: '1' },
                  fontWeight: '500',
                },
                overwritePropsView: {
                  fontSize: '16',
                  tagName: '',
                  text: 'Dark text',
                  textAlign: 'center',
                  color: { r: '52', g: '58', b: '64', a: '1' },
                  fontWeight: '500',
                },
              },
            ],
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
          {
            isSubmenu: true,
            label: 'Blockquote',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '14',
                  tagName: 'blockquote',
                  text: "I'm a blockquote. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '400',
                  color: { r: '119', g: '119', b: '119', a: '1' },
                  fontStyle: 'italic',
                },
                overwritePropsView: {
                  fontSize: '14',
                  tagName: 'blockquote',
                  text: "I'm a blockquote. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '400',
                  color: { r: '119', g: '119', b: '119', a: '1' },
                  fontStyle: 'italic',
                },
              },
            ],
          },
          {
            isSubmenu: true,
            label: 'Subscript',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '12',
                  tagName: 'sub',
                  text: "I'm a subscript. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '400',
                  color: { r: '119', g: '119', b: '119', a: '1' },
                },
                overwritePropsView: {
                  fontSize: '12',
                  tagName: 'sub',
                  text: "I'm a subscript. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '400',
                  color: { r: '119', g: '119', b: '119', a: '1' },
                },
              },
            ],
          },
          {
            isSubmenu: true,
            label: 'Superscript',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: CraftText,
                ViewElement: Text,
                overwritePropsCraft: {
                  fontSize: '12',
                  tagName: 'sup',
                  text: "I'm a superscript. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '400',
                  color: { r: '119', g: '119', b: '119', a: '1' },
                },
                overwritePropsView: {
                  fontSize: '12',
                  tagName: 'sup',
                  text: "I'm a superscript. Click here to add your own text and edit me. It's easy.",
                  fontWeight: '400',
                  color: { r: '119', g: '119', b: '119', a: '1' },
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
            isSubmenu: true,
            label: 'Status Button',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '3', g: '123', b: '255', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Primary',
                },
                overwritePropsView: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '3', g: '123', b: '255', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Primary',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '40', g: '167', b: '69', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Success',
                },
                overwritePropsView: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '40', g: '167', b: '69', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Success',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '23', g: '162', b: '184', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Info',
                },
                overwritePropsView: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '23', g: '162', b: '184', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Info',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '255', g: '77', b: '79', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Danger',
                },
                overwritePropsView: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '255', g: '77', b: '79', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Danger',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '236', g: '165', b: '43', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Warning',
                },
                overwritePropsView: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '236', g: '165', b: '43', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Warning',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '52', g: '58', b: '64', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Dark',
                },
                overwritePropsView: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '52', g: '58', b: '64', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Dark',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '108', g: '117', b: '125', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Light Dark',
                },
                overwritePropsView: {
                  color: { r: '255', g: '255', b: '255', a: '1' },
                  background: { r: '108', g: '117', b: '125', a: '1' },
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Light Dark',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '3', g: '123', b: '255', a: '1' },
                  borderColor: { r: '3', g: '123', b: '255', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Primary',
                  buttonStyle: 'outline',
                },
                overwritePropsView: {
                  color: { r: '3', g: '123', b: '255', a: '1' },
                  borderColor: { r: '3', g: '123', b: '255', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Primary',
                  buttonStyle: 'outline',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '40', g: '167', b: '69', a: '1' },
                  borderColor: { r: '40', g: '167', b: '69', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Success',
                  buttonStyle: 'outline',
                },
                overwritePropsView: {
                  color: { r: '40', g: '167', b: '69', a: '1' },
                  borderColor: { r: '40', g: '167', b: '69', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Success',
                  buttonStyle: 'outline',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '23', g: '162', b: '184', a: '1' },
                  borderColor: { r: '23', g: '162', b: '184', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Info',
                  buttonStyle: 'outline',
                },
                overwritePropsView: {
                  color: { r: '23', g: '162', b: '184', a: '1' },
                  borderColor: { r: '23', g: '162', b: '184', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Info',
                  buttonStyle: 'outline',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '255', g: '77', b: '79', a: '1' },
                  borderColor: { r: '255', g: '77', b: '79', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Danger',
                  buttonStyle: 'outline',
                },
                overwritePropsView: {
                  color: { r: '255', g: '77', b: '79', a: '1' },
                  borderColor: { r: '255', g: '77', b: '79', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Danger',
                  buttonStyle: 'outline',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '236', g: '165', b: '43', a: '1' },
                  borderColor: { r: '236', g: '165', b: '43', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Warning',
                  buttonStyle: 'outline',
                },
                overwritePropsView: {
                  color: { r: '236', g: '165', b: '43', a: '1' },
                  borderColor: { r: '236', g: '165', b: '43', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Warning',
                  buttonStyle: 'outline',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '52', g: '58', b: '64', a: '1' },
                  borderColor: { r: '52', g: '58', b: '64', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Dark',
                  buttonStyle: 'outline',
                },
                overwritePropsView: {
                  color: { r: '52', g: '58', b: '64', a: '1' },
                  borderColor: { r: '52', g: '58', b: '64', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Dark',
                  buttonStyle: 'outline',
                },
              },
              {
                isSubmenu: false,
                CraftElement: CraftButton,
                ViewElement: Button,
                overwritePropsCraft: {
                  color: { r: '108', g: '117', b: '125', a: '1' },
                  borderColor: { r: '108', g: '117', b: '125', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Light Dark',
                  buttonStyle: 'outline',
                },
                overwritePropsView: {
                  color: { r: '108', g: '117', b: '125', a: '1' },
                  borderColor: { r: '108', g: '117', b: '125', a: '1' },
                  borderWidth: '1',
                  fontSize: '14',
                  width: '100px',
                  fontWeight: '400',
                  text: 'Light Dark',
                  buttonStyle: 'outline',
                },
              },
            ],
          },
        ],
      },
      {
        label: 'Container',
        Icon: SquareSvg,
        subItems: [
          {
            isSubmenu: true,
            label: 'Vertical Layout',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 189, g: 246, b: 205, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '400px',
                  width: '100%',
                },
                overwritePropsView: {
                  background: { r: 189, g: 246, b: 205, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '200px',
                  width: '100%',
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 221, g: 195, b: 255, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '480px',
                  width: '360px',
                },
                overwritePropsView: {
                  background: { r: 221, g: 195, b: 255, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '240px',
                  width: '180px',
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 255, g: 223, b: 195, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '400px',
                  width: '280px',
                  shadow: 1,
                },
                overwritePropsView: {
                  background: { r: 255, g: 223, b: 195, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '200px',
                  width: '140px',
                  shadow: 1,
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 245, g: 189, b: 188, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '280px',
                  width: '280px',
                  radius: 8,
                },
                overwritePropsView: {
                  background: { r: 245, g: 189, b: 188, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '140px',
                  width: '140px',
                  radius: 8,
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 188, g: 211, b: 245, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '200px',
                  width: '200px',
                  radius: 8,
                },
                overwritePropsView: {
                  background: { r: 188, g: 211, b: 245, a: 1 },
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
                  is: CraftContainer,
                  background: { r: 224, g: 227, b: 231, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '200px',
                  width: '200px',
                  radius: 100,
                },
                overwritePropsView: {
                  background: { r: 224, g: 227, b: 231, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '100px',
                  width: '100px',
                  radius: 50,
                },
              },
            ],
          },
          {
            isSubmenu: true,
            label: 'Horizontal Layout',
            subItems: [
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 189, g: 246, b: 205, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  width: '100%',
                  height: '200px',
                  flexDirection: 'row',
                },
                overwritePropsView: {
                  background: { r: 189, g: 246, b: 205, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  width: '100%',
                  height: '100px',
                  flexDirection: 'row',
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 221, g: 195, b: 255, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  width: '400px',
                  height: '280px',
                  flexDirection: 'row',
                },
                overwritePropsView: {
                  background: { r: 221, g: 195, b: 255, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  width: '200px',
                  height: '140px',
                  flexDirection: 'row',
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 255, g: 223, b: 195, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  width: '400px',
                  height: '200px',
                  shadow: 1,
                  flexDirection: 'row',
                },
                overwritePropsView: {
                  background: { r: 255, g: 223, b: 195, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  width: '200px',
                  height: '100px',
                  shadow: 1,
                  flexDirection: 'row',
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 245, g: 189, b: 188, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '280px',
                  width: '280px',
                  radius: 8,
                  flexDirection: 'row',
                },
                overwritePropsView: {
                  background: { r: 245, g: 189, b: 188, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '140px',
                  width: '140px',
                  radius: 8,
                  flexDirection: 'row',
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 188, g: 211, b: 245, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '200px',
                  width: '200px',
                  radius: 8,
                  flexDirection: 'row',
                },
                overwritePropsView: {
                  background: { r: 188, g: 211, b: 245, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '100px',
                  width: '100px',
                  radius: 8,
                  flexDirection: 'row',
                },
              },
              {
                isSubmenu: false,
                CraftElement: Element,
                ViewElement: Container,
                overwritePropsCraft: {
                  canvas: true,
                  is: CraftContainer,
                  background: { r: 224, g: 227, b: 231, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '200px',
                  width: '200px',
                  radius: 100,
                  flexDirection: 'row',
                },
                overwritePropsView: {
                  background: { r: 224, g: 227, b: 231, a: 1 },
                  color: { r: '0', g: '0', b: '0', a: '1' },
                  height: '100px',
                  width: '100px',
                  radius: 50,
                  flexDirection: 'row',
                },
              },
            ],
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
              width: '100%',
              src: 'https://images.unsplash.com/photo-1686740172488-6a680069affb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              radius: 5,
            },
            overwritePropsView: {
              height: '200px',
              width: '100%',
              className: 'cursor-move',
              src: 'https://images.unsplash.com/photo-1686740172488-6a680069affb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
              radius: 5,
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '300px',
              width: '360px',
              src: 'https://images.unsplash.com/photo-1686907470279-ffb1f9f2a574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
              radius: 8,
            },
            overwritePropsView: {
              height: '200px',
              width: '240px',
              src: 'https://images.unsplash.com/photo-1686907470279-ffb1f9f2a574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80',
              className: 'cursor-move',
              radius: 5,
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '350px',
              width: '250px',
              src: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
              radius: 8,
            },
            overwritePropsView: {
              height: '280px',
              width: '200px',
              src: 'https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80',
              className: 'cursor-move',
              radius: 5,
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '240px',
              width: '200px',
              src: 'https://images.unsplash.com/photo-1534459565531-5bc535f757c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
              radius: 24,
            },
            overwritePropsView: {
              height: '180px',
              width: '150px',
              src: 'https://images.unsplash.com/photo-1534459565531-5bc535f757c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
              className: 'cursor-move',
              radius: 20,
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftImage,
            ViewElement: Image,
            overwritePropsCraft: {
              height: '200px',
              width: '200px',
              src: 'https://images.unsplash.com/photo-1540396776447-f2a5b9a020cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=403&q=80',
              radius: 100,
            },
            overwritePropsView: {
              height: '150px',
              width: '150px',
              src: 'https://images.unsplash.com/photo-1540396776447-f2a5b9a020cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=403&q=80',
              className: 'cursor-move',
              radius: 75,
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
              height: '200px',
              width: '350px',
              videoId: '3AtDnEC4zak',
            },
            overwritePropsView: {
              height: '160px',
              width: '280px',
              enabled: true,
              className: 'cursor-move',
              videoId: '3AtDnEC4zak',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftVideo,
            ViewElement: Video,
            overwritePropsCraft: {
              height: '200px',
              width: '250px',
              videoId: 'HsgTIMDA6ps',
            },
            overwritePropsView: {
              height: '160px',
              width: '200px',
              enabled: true,
              className: 'cursor-move',
              videoId: 'HsgTIMDA6ps',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftVideo,
            ViewElement: Video,
            overwritePropsCraft: {
              height: '250px',
              width: '200px',
              videoId: 'vIOVz3HkLJU',
            },
            overwritePropsView: {
              height: '200px',
              width: '160px',
              enabled: true,
              className: 'cursor-move',
              videoId: 'vIOVz3HkLJU',
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
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              inputStyle: 'outline',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              inputStyle: 'outline',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'number',
              placeholder: 'number value',
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'number',
              placeholder: 'number value',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'password',
              placeholder: 'password value',
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'password',
              placeholder: 'password value',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'date',
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'date',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              height: '48px',
              width: '64px',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'color',
            },
            overwritePropsView: {
              height: '48px',
              width: '64px',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'color',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftInput,
            ViewElement: Input,
            overwritePropsCraft: {
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'file',
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              type: 'file',
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
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '65', g: '191', b: '232', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '400',
              text: 'CLICK HERE',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
            overwritePropsView: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '65', g: '191', b: '232', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '400',
              text: 'CLICK HERE',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '91', g: '86', b: '97', a: '1' },
              background: { r: '249', g: '234', b: '21', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
            overwritePropsView: {
              color: { r: '91', g: '86', b: '97', a: '1' },
              background: { r: '249', g: '234', b: '21', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '1', g: '188', b: '139', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
            overwritePropsView: {
              color: { r: '255', g: '255', b: '255', a: '1' },
              background: { r: '1', g: '188', b: '139', a: '1' },
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '1', g: '188', b: '139', a: '1' },
              borderColor: { r: '1', g: '188', b: '139', a: '1' },
              borderWidth: '1',
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              anchorStyle: 'outline',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
            overwritePropsView: {
              color: { r: '1', g: '188', b: '139', a: '1' },
              borderColor: { r: '1', g: '188', b: '139', a: '1' },
              borderWidth: '1',
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              anchorStyle: 'outline',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftAnchor,
            ViewElement: Anchor,
            overwritePropsCraft: {
              color: { r: '255', g: '59', b: '77', a: '1' },
              borderColor: { r: '255', g: '59', b: '77', a: '1' },
              borderWidth: '1',
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              anchorStyle: 'outline',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
            overwritePropsView: {
              color: { r: '255', g: '59', b: '77', a: '1' },
              borderColor: { r: '255', g: '59', b: '77', a: '1' },
              borderWidth: '1',
              fontSize: '14',
              width: '50%',
              fontWeight: '500',
              text: 'CLICK HERE',
              anchorStyle: 'outline',
              events: {
                href: 'https://www.google.com.vn/',
                clickType: 'href',
              },
            },
          },
        ],
      },
      {
        label: 'Map',
        Icon: MapSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftMap,
            ViewElement: Map,
            overwritePropsCraft: {
              width: '800px',
              height: '400px',
            },
            overwritePropsView: {},
          },
          {
            isSubmenu: false,
            CraftElement: CraftMap,
            ViewElement: Map,
            overwritePropsCraft: {
              width: '800px',
              height: '400px',
              zoom: 8,
            },
            overwritePropsView: {
              zoom: 8,
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftMap,
            ViewElement: Map,
            overwritePropsCraft: {
              width: '200px',
              height: '400px',
              zoom: 8,
            },
            overwritePropsView: {
              zoom: 8,
              width: '200px',
              height: '400px',
            },
          },
          {
            isSubmenu: false,
            CraftElement: CraftMap,
            ViewElement: Map,
            overwritePropsCraft: {
              width: '200px',
              height: '400px',
            },
            overwritePropsView: {
              width: '200px',
              height: '400px',
            },
          },
        ],
      },
      {
        label: 'Textarea',
        Icon: TextareaSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftTextarea,
            ViewElement: Textarea,
            overwritePropsCraft: {
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
            },
          },
        ],
      },
      {
        label: 'Code',
        Icon: CodeSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftCode,
            ViewElement: Code,
            overwritePropsCraft: {
              height: '48px',
              width: 'auto',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
              text: `<!DOCTYPE html>
<html>
  <body>

    <h2>JavaScript Number</h2>

    <p>The toFixed()</p>
    <p>For working with money.</p>

    <p id="demo"></p>

    <script>
      let x = 9.656;
      document.innerHTML =
        x.toFixed(0) + "<br>" +
        x.toFixed(2) + "<br>" +
        x.toFixed(4) + "<br>" +
        x.toFixed(6);
    </script>

  </body>
</html>`,
            },
            overwritePropsView: {
              height: '48px',
              width: 'auto',
              inputOptions: { readonly: true },
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
              placeholder: 'text value',
              text: `<!DOCTYPE html>
  <html>
    <body>

      <h2>JavaScript Number</h2>

      <p>The toFixed()</p>
      <p>For working with money.</p>

      <p id="demo"></p>

      <script>
        let x = 9.656;
        document.innerHTML =
          x.toFixed(0) + "<br>" +
          x.toFixed(2) + "<br>" +
          x.toFixed(4) + "<br>" +
          x.toFixed(6);
      </script>

    </body>
  </html>`,
            },
          },
        ],
      },
      {
        label: 'Label',
        Icon: LabelSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftLabel,
            ViewElement: Label,
            overwritePropsCraft: {
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
            },
            overwritePropsView: {
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
            },
          },
        ]
      },
      {
        label: 'Checkbox',
        Icon: CheckboxSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftCheckbox,
            ViewElement: Checkbox,
            overwritePropsCraft: {
              height: '30px',
              width: '30px',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
            },
            overwritePropsView: {
              height: '30px',
              width: '30px',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
            },
          },
        ],
      },
      {
        label: 'Radio',
        Icon: RadioSvg,
        subItems: [
          {
            isSubmenu: false,
            CraftElement: CraftRadio,
            ViewElement: Radio,
            overwritePropsCraft: {
              height: '30px',
              width: '30px',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
            },
            overwritePropsView: {
              height: '30px',
              width: '30px',
              fontWeight: '400',
              borderColorFocus: { r: '3', g: '123', b: '255', a: '1' },
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
  },
];
