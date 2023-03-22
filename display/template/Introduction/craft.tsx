import { CraftContainer, CraftText, CraftImage } from 'display/selectors';

export const CraftTemplateIntroduction = (
  <CraftContainer
    background={{ r: 255, g: 255, b: 255, a: 1 }}
    flexDirection='row'
    justifyContent='center'
    width='100%'
    height='auto'
    padding={['16', '16', '16', '16']}
    margin={['0', '0', '16', '0']}
  >
    <CraftContainer
      background={{ r: 255, g: 255, b: 255, a: 1 }}
      flexDirection='row'
      justifyContent='center'
      width='50%'
      height='auto'
      padding={['8', '8', '8', '8']}
      margin={['0', '8', '0', '0']}
    >
      <CraftText tagName='h1' fontSize='26px' text='This is header for introduction'></CraftText>
      <CraftText
        tagName='paragraph'
        fontSize='16px'
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
      <CraftImage />
    </CraftContainer>
  </CraftContainer>
);
