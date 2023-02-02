import styled from 'styled-components';

export const YoutubeDiv = styled.div<any>`
width: 100%;
height: 100%;
> div {
  height: 100%;
}
iframe {
  pointer-events: ${(props) => (props.enabled ? 'none' : 'auto')};
  // width:100%!important;
  // height:100%!important;
}
`;