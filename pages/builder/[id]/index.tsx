import { Editor, Frame, Element } from 'libs/core/src';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';

import { Viewport, RenderNode } from '../../../display/editor';
import { Custom1, OnlyButtons } from '../../../display/selectors/Custom1';
import { Custom2, Custom2VideoDrop } from '../../../display/selectors/Custom2';
import { Custom3, Custom3BtnDrop } from '../../../display/selectors/Custom3';
import { ProSidebarProvider } from 'react-pro-sidebar';

import {
  CraftButton,
  CraftContainer,
  CraftText,
  CraftVideo,
  CraftInput,
  CraftImage,
  CraftPopup,
  CraftAnchor,
} from 'display/selectors';
import userService, { PROJECT } from 'services/user';
import { useRouter } from 'next/router';
import lz from 'lzutf8';


const theme = createMuiTheme({
  typography: {
    fontFamily: ['acumin-pro', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
});

export const ProjectContext = React.createContext({});


function Builder() {
  const router = useRouter();
  const [project, setProject] = useState<PROJECT>();
  const currentProductId = router.query?.id as string;
  useEffect(() => {
    userService.getProjectById({ id: currentProductId }).then(resp => {
      if (resp?.id) {
        setProject(resp);
      }
    }).catch((err) => {
      console.log(err);
    });
  }, [currentProductId]);

  return (
    <ThemeProvider theme={theme}>
      <ProSidebarProvider>
        <div className='h-full'>
          {project?.id && <ProjectContext.Provider value={{ project, setProject }}><Editor
            resolver={{
              CraftContainer,
              CraftText,
              CraftVideo,
              CraftInput,
              CraftImage,
              CraftButton,
              CraftAnchor,
              Custom1,
              Custom2,
              Custom2VideoDrop,
              Custom3,
              Custom3BtnDrop,
              OnlyButtons,
              CraftPopup,
            }}
            enabled={false}
            onRender={RenderNode}
          >
            <Viewport >
              <Frame data={lz.decompress(lz.decodeBase64(project.compressString))}>

                <Element
                  canvas
                  is={CraftContainer}
                  width='100%' // editor container
                  height='auto'
                  background={{ r: '255', g: '255', b: '255', a: '1' }}
                  padding={['40', '40', '40', '40']}
                  custom={{ displayName: 'App' }}
                >
                  {/* Page demo with available content */}

                  {/* First container */}
                  <Element
                    canvas
                    is={CraftContainer}
                    flexDirection='column'
                    width='100%'
                    height='auto'
                    padding={['20', '20', '20', '20']}
                    margin={['0', '0', '20', '0']}
                    alignItems='center'
                    custom={{ displayName: 'Introduction' }}
                  >
                    <Element
                      canvas
                      is={CraftContainer}
                      width='100%'
                      height='100%'
                      padding={['0', '20', '0', '20']}
                      margin={['0', '0', '20', '0']}
                      custom={{ displayName: 'Heading' }}
                    >
                      <CraftText
                        textAlign='center'
                        fontSize='46'
                        fontWeight='500'
                        text='Welcome to Website Builder'
                      ></CraftText>
                    </Element>
                    <Element
                      canvas
                      is={CraftContainer}
                      width='80%'
                      height='100%'
                      padding={['0', '20', '0', '20']}
                      custom={{ displayName: 'Description' }}
                    >
                      <CraftText
                        fontSize='14'
                        fontWeight='400'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies dignissim ullamcorper. Suspendisse faucibus vitae mi a dictum. Nam ut mollis est, rhoncus varius orci. Cras malesuada viverra mauris, ac place.'
                      ></CraftText>
                    </Element>
                  </Element>

                  <Element
                    canvas
                    is={CraftContainer}
                    background={{ r: '39', g: '41', b: '41', a: '1' }}
                    flexDirection='column'
                    width='100%'
                    height='auto'
                    padding={['40', '40', '40', '40']}
                    margin={['0', '0', '40', '0']}
                    custom={{ displayName: 'ComplexSection' }}
                  >
                    <Element
                      canvas
                      background={{
                        r: '76',
                        g: '78',
                        b: '78',
                        a: '0',
                      }}
                      is={CraftContainer}
                      flexDirection='row'
                      margin={['0', '0', '0', '0']}
                      width='100%'
                      height='auto'
                      alignItems='center'
                      custom={{ displayName: 'Wrapper' }}
                    >
                      <Element
                        canvas
                        background={{
                          r: '0',
                          g: '0',
                          b: '0',
                          a: '0',
                        }}
                        is={CraftContainer}
                        alignItems='center'
                        padding={['0', '0', '0', '0']}
                        flexDirection='row'
                        width='350px'
                        height='250px'
                        custom={{ displayName: 'Square' }}
                      >
                        <Element
                          canvas
                          is={CraftContainer}
                          justifyContent='center'
                          alignItems='center'
                          background={{
                            r: '76',
                            g: '78',
                            b: '78',
                            a: '1',
                          }}
                          shadow={25}
                          width='90%'
                          height='90%'
                          padding={['10', '20', '10', '20']}
                          custom={{ displayName: 'Outer' }}
                        >
                          <Element
                            canvas
                            is={CraftContainer}
                            justifyContent='center'
                            alignItems='center'
                            background={{
                              r: '76',
                              g: '78',
                              b: '78',
                              a: '1',
                            }}
                            shadow={50}
                            width='80%'
                            height='80%'
                            padding={['10', '20', '10', '20']}
                            custom={{ displayName: 'Middle' }}
                          >
                            <Element
                              canvas
                              is={CraftContainer}
                              justifyContent='center'
                              alignItems='center'
                              background={{
                                r: '76',
                                g: '78',
                                b: '78',
                                a: '1',
                              }}
                              shadow={50}
                              width='60%'
                              height='60%'
                              padding={['10', '20', '10', '20']}
                              custom={{ displayName: 'Inner' }}
                            />
                          </Element>
                        </Element>
                      </Element>
                      <Element
                        canvas
                        background={{
                          r: '0',
                          g: '0',
                          b: '0',
                          a: '0',
                        }}
                        is={CraftContainer}
                        padding={['0', '0', '0', '20']}
                        flexDirection='column'
                        width='55%'
                        height='100%'
                        fillSpace='yes'
                        custom={{ displayName: 'Content' }}
                      >
                        <CraftText
                          color={{
                            r: '255',
                            g: '255',
                            b: '255',
                            a: '1',
                          }}
                          margin={['0', '0', '18', '0']}
                          fontSize='20'
                          text='Design complex components'
                        ></CraftText>
                        <CraftText
                          color={{
                            r: '255',
                            g: '255',
                            b: '255',
                            a: '0.8',
                          }}
                          fontSize='14'
                          fontWeight='400'
                          text='You can define areas within your React component which users can drop other components into. <br/><br />You can even design how the component should be edited — content editable, drag to resize, have inputs on toolbars — anything really.'
                        ></CraftText>
                      </Element>
                    </Element>
                  </Element>

                  <Element
                    canvas
                    is={CraftContainer}
                    background={{
                      r: '234',
                      g: '245',
                      b: '245',
                      a: '1',
                    }}
                    flexDirection='column'
                    width='100%'
                    height='auto'
                    padding={['40', '40', '40', '40']}
                    margin={['0', '0', '40', '0']}
                    custom={{ displayName: 'Programmatic' }}
                  >
                    <Element
                      canvas
                      background={{
                        r: '76',
                        g: '78',
                        b: '78',
                        a: '0',
                      }}
                      is={CraftContainer}
                      flexDirection='column'
                      margin={['0,', '0', '20', '0']}
                      width='100%'
                      height='auto'
                      custom={{ displayName: 'Heading' }}
                    >
                      <CraftText
                        color={{
                          r: '46',
                          g: '47',
                          b: '47',
                          a: '1',
                        }}
                        fontSize='23'
                        text='Programmatic drag &amp; drop'
                      ></CraftText>
                      <CraftText
                        fontSize='14'
                        fontWeight='400'
                        text='Govern what goes in and out of your components'
                      ></CraftText>
                    </Element>
                    <Element
                      canvas
                      background={{
                        r: '76',
                        g: '78',
                        b: '78',
                        a: '0',
                      }}
                      is={CraftContainer}
                      flexDirection='row'
                      margin={['30', '0', '0', '0']}
                      width='100%'
                      height='auto'
                      custom={{ displayName: 'Content' }}
                    >
                      <Element
                        canvas
                        background={{
                          r: '0',
                          g: '0',
                          b: '0',
                          a: '0',
                        }}
                        is={CraftContainer}
                        padding={['0', '20', '0', '0']}
                        flexDirection='row'
                        width='45%'
                        custom={{ displayName: 'Left' }}
                      >
                        <Custom1
                          background={{
                            r: '119',
                            g: '219',
                            b: '165',
                            a: '1',
                          }}
                          height='auto'
                          width='100%'
                          padding={['20', '20', '20', '20']}
                          margin={['0', '0', '0', '0']}
                          shadow={40}
                        />
                      </Element>
                      <Element
                        canvas
                        background={{
                          r: '0',
                          g: '0',
                          b: '0',
                          a: '0',
                        }}
                        is={CraftContainer}
                        padding={['0', '0', '0', '20']}
                        flexDirection='column'
                        width='55%'
                        custom={{ displayName: 'Right' }}
                      >
                        <Custom2
                          background={{
                            r: '108',
                            g: '126',
                            b: '131',
                            a: '1',
                          }}
                          height='125px'
                          width='100%'
                          padding={['0', '0', '0', '20']}
                          margin={['0', '0', '0', '0']}
                          shadow={40}
                          flexDirection='row'
                          alignItems='center'
                        />
                        <Custom3
                          background={{
                            r: '134',
                            g: '187',
                            b: '201',
                            a: '1',
                          }}
                          height='auto'
                          width='100%'
                          padding={['20', '20', '20', '20']}
                          margin={['20', '0', '0', '0']}
                          shadow={40}
                          flexDirection='column'
                        />
                      </Element>
                    </Element>
                  </Element>
                  {/* <Element
                    is={CraftPopup}
                    custom={{ displayName: "Popup" }}
                    ></Element> */}
                </Element>

              </Frame>
            </Viewport>
          </Editor></ProjectContext.Provider>}
        </div>
      </ProSidebarProvider>
      ;
    </ThemeProvider>
  );
}

export default Builder;
