import styled from 'styled-components';

export const StyledImage = styled.img<any>`
border-radius: ${(props) => `${(props.radius)}px`};
object-fit: ${(props) => (props.objectFit)};
`;