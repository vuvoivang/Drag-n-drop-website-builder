import styled from 'styled-components';
import { MapProps } from './props';

export const StyledDiv = styled.div<Partial<MapProps>>`
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
`;
