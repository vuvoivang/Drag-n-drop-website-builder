import { CraftContainer, CraftText, CraftImage } from 'display/selectors';

export const CraftTemplateIntroduction = (
  <CraftContainer
    background={{ r: 255, g: 255, b: 255, a: 1 }}
    flexDirection='row'
    justifyContent='center'
    alignItems='center'
    width='100%'
    height='auto'
    padding={['16', '16', '16', '16']}
    margin={['0', '0', '16', '0']}
  >
    <CraftContainer
      background={{ r: 255, g: 255, b: 255, a: 1 }}
      flexDirection='column'
      justifyContent='center'
      width='50%'
      height='auto'
      padding={['8', '8', '8', '8']}
      margin={['0', '8', '0', '0']}
    >
      <CraftText tagName='h1' fontSize='36' text='Website builder' fontWeight='600'></CraftText>
      <CraftText
        tagName='paragraph'
        fontSize='13'
        text='Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin dolorem ipsum roughly translated as pain itself.'
      ></CraftText>
    </CraftContainer>
    <CraftContainer
      background={{ r: 255, g: 255, b: 255, a: 1 }}
      flexDirection='row'
      justifyContent='center'
      width='50%'
      height='auto'
      padding={['8', '8', '8', '8']}
      margin={['0', '0', '0', '8']}
    >
      <CraftImage src='https://assets-global.website-files.com/6243c3bb3b5a1852803d0c7f/6243c3bb3b5a18f1113d13c3_best-website-builder-for-small-business.jpg' />
    </CraftContainer>
  </CraftContainer>
);
