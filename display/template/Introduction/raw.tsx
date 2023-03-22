import { Container, Anchor, Text, Image } from 'display/raw-components';

export const TemplateIntroduction = () => {
  return (
    <Container
      background={{ r: 255, g: 255, b: 255, a: 1 }}
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height='auto'
      padding={['4', '4', '4', '4']}
      margin={['0', '0', '4', '0']}
    >
      <Container
        background={{ r: 255, g: 255, b: 255, a: 1 }}
        flexDirection='column'
        justifyContent='center'
        width='50%'
        height='auto'
        padding={['2', '2', '2', '2']}
        margin={['0', '2', '0', '0']}
      >
        <Text tagName='h1' fontSize='14' text='Website builder' fontWeight='600'></Text>
        <Text
          tagName='paragraph'
          fontSize='8'
          text='Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.'
        ></Text>
      </Container>
      <Container
        background={{ r: 255, g: 255, b: 255, a: 1 }}
        flexDirection='row'
        justifyContent='center'
        width='50%'
        height='auto'
        padding={['8', '8', '8', '8']}
        margin={['0', '0', '0', '8']}
      >
        <Image width='100%' src='https://assets-global.website-files.com/6243c3bb3b5a1852803d0c7f/6243c3bb3b5a18f1113d13c3_best-website-builder-for-small-business.jpg' />
      </Container>
    </Container>
  );
};
