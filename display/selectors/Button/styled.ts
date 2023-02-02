import styled from 'styled-components';
import {ButtonProps} from "./props";

export const StyledButton = styled.button<ButtonProps>`
  background: ${(props) =>
    props.buttonStyle === 'full'
      ? `rgba(${Object.values(props.background)})`
      : 'transparent'};
  border: 2px solid transparent;
  border-color: ${(props) =>
    props.buttonStyle === 'outline'
      ? `rgba(${Object.values(props.background)})`
      : 'transparent'};
  margin: ${({ margin }) =>
    `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`};
`;