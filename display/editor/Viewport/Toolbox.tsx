import { Element, useEditor } from 'libs/core/src';
import { Tooltip } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import ButtonSvg from '../../../public/icons/toolbox/button.svg';
import SquareSvg from '../../../public/icons/toolbox/rectangle.svg';
import TypeSvg from '../../../public/icons/toolbox/text.svg';
import YoutubeSvg from '../../../public/icons/toolbox/video-line.svg';
import ImageSvg from '../../../public/icons/toolbox/image.svg';
import InputSvg from '../../../public/icons/toolbox/input.svg';

import { Button } from '../../selectors/Button';
import { Container } from '../../selectors/Container';
import { Text } from '../../selectors/Text';
import { Video } from '../../selectors/Video';
import { Input } from 'display/selectors/Input';
import { Image } from 'display/selectors/Image';
import { RawButton } from 'display/materials/components/Button';
import { HigherOrderButton } from 'display/materials/components/Button/high';

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
`;

const Item = styled.a<{ move?: boolean }>`
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
    color: #fff;
  }
  svg {
    width: 22px;
    height: 22px;
    fill: #fff;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;


const newProps = {
  background: { r: 22, g: 163, b: 74, a: 0.5 },
}
export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-32 h-full flex flex-col bg-dark"
    >
      <div className="flex flex-1 flex-col pt-3">
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
                height="300px"
                width="300px"
                ></Element>
                )
              }
        >
          <div className="p-2 my-5 text-white fs-md letter-spacing-1 fw-large">Components</div>
          <Tooltip title="Container" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
              <p>Container</p>
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Hi there" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <TypeSvg />
              <p>Text</p>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Button />)}>
          <Tooltip title="Button" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <ButtonSvg />
              <p>Button</p>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Image />)}>
          <Tooltip title="Image" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <ImageSvg />
              <p>Image</p>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Input />)}>
          <Tooltip title="Image" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <InputSvg />
              <p>Input</p>
            </Item>
          </Tooltip>
        </div>
        <div ref={(ref) => create(ref, <Video />)}>
          <Tooltip title="Video" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <YoutubeSvg />
              <p>Video</p>
            </Item>
          </Tooltip>
        </div>
        

        <RawButton className="cursor-move" ref={(ref) => create(ref, <Button variantClassNames="m-2 pb-2"/>)}>
        </RawButton>

        <RawButton {...newProps} className="cursor-move" ref={(ref) => create(ref, <HigherOrderButton {...newProps}/>)}>
        </RawButton>

      </div>
    </ToolboxDiv>
  );
};
