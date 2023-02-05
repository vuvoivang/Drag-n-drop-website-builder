import styled from 'styled-components';

export const StyledImage = styled.img<any>`
border-radius: ${(props) => `${(props.radius)}px`};
object-fit: ${(props) => (props.objectFit)};
`;

export const StyledDiv = styled.div<any>`
width: ${(props) => (props.radius)};
height: ${(props) => (props.objectFit)};
`;