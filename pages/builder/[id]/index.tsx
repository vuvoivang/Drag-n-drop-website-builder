import { Editor, Frame, Element } from 'libs/core/src';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';

import { Viewport, RenderNode } from '../../../display/editor';

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
  CraftMap,
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
              CraftPopup,
              CraftMap,
            }}
            enabled={false}
            onRender={RenderNode}
          >
            <Viewport >
              <Frame data={lz.decompress(lz.decodeBase64(project.compressString))}>
              </Frame>
              {/* <Frame>
                {DEFAULT_PAGE}
              </Frame> */}
            </Viewport>
          </Editor></ProjectContext.Provider>}
        </div>
      </ProSidebarProvider>
      ;
    </ThemeProvider>
  );
}

export default Builder;
