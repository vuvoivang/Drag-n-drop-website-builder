import {
  Container,
  Anchor,
} from "display/raw-components";

export const TemplateMenu = () => {
  return (
  <Container
    background={{ r: 255, g: 255, b: 255, a: 1 }}
    flexDirection='row'
    justifyContent='center'
    width='100%'
    height='auto'
    padding={['4', '4', '4', '4']}
    margin={['0', '0', '4', '0']}
  >
    <Anchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='12'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      padding={['4', '4', '4', '4']}
      text='Home'
    />
    <Anchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='12'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      padding={['4', '4', '4', '4']}
      text='About'
    />
    <Anchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='12'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      padding={['4', '4', '4', '4']}
      text='Products'
    />
    <Anchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='12'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      padding={['4', '4', '4', '4']}
      text='Personal'
    />
  </Container>
  );
};
