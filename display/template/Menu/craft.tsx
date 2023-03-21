import {
  CraftContainer,
  CraftAnchor,
} from 'display/selectors';

export const CraftTemplateMenu = (
  <CraftContainer
    background={{ r: 255, g: 255, b: 255, a: 1 }}
    flexDirection='row'
    justifyContent='center'
    width='100%'
    height='auto'
    padding={['16', '16', '16', '16']}
    margin={['0', '0', '16', '0']}
  >
    <CraftAnchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='16'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      text='Home'
    />
    <CraftAnchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='16'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      text='About'
    />
    <CraftAnchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='16'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      text='Products'
    />
    <CraftAnchor
      color={{ r: 0, g: 0, b: 0, a: 1 }}
      background={{ r: 0, g: 0, b: 0, a: 0 }}
      fontSize='16'
      width='auto'
      fontWeight='400'
      anchorStyle='outline'
      text='Personal'
    />
  </CraftContainer>
);
