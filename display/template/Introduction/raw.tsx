import { Container, Anchor, Text, Image } from 'display/raw-components';

export const TemplateIntroduction = () => {
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
      <Container
        background={{ r: 255, g: 255, b: 255, a: 1 }}
        flexDirection='row'
        justifyContent='center'
        width='50%'
        height='auto'
        padding={['4', '4', '4', '4']}
        margin={['0', '0', '4', '0']}
      >
        <Text tagName='h1' fontSize='26px' text='This is header for introduction'></Text>
        <Text
          tagName='paragraph'
          fontSize='16px'
          text='Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin dolorem ipsum roughly translated as pain itself.'
        ></Text>
      </Container>
      <Container
        background={{ r: 255, g: 255, b: 255, a: 1 }}
        flexDirection='row'
        justifyContent='center'
        width='50%'
        height='auto'
        padding={['4', '4', '4', '4']}
        margin={['0', '0', '4', '0']}
      >
        <Image />
      </Container>
    </Container>
  );
};
