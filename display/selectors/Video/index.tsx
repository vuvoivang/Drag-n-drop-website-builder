import { useNode, useEditor } from 'libs/core/src';
import React from 'react';
import YouTube from 'react-youtube';
import { craftConfig } from './craft';
import { YoutubeDiv } from './styled';

export const Video = (props: any) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { videoId } = props;

  return (
    <YoutubeDiv ref={connect} enabled={enabled}>
      <YouTube
        videoId={videoId}
        opts={{
          width: '100%',
          height: '100%',
        }}
      />
    </YoutubeDiv>
  );
};

Video.craft = craftConfig;
