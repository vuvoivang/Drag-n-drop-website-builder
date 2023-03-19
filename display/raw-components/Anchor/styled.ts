import styled from 'styled-components';
import { AnchorProps } from './props';

export const StyledAnchor = styled.a<Partial<AnchorProps>>`
  background: ${(props) => (props.anchorStyle === 'full' ? `rgba(${Object.values(props.background)})` : 'transparent')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.anchorStyle === 'outline' ? `rgba(${Object.values(props.background)})` : 'transparent'};
  padding: ${({ padding }) => `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`};
  margin: ${({ margin }) => `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
`;
