import { useNode, useEditor, UserComponent } from "libs/core/src";
import React from "react";
import YouTube from "react-youtube";
import { YoutubeDiv } from "../../raw-components/Video/styled";

import { VideoSettings } from "./setting";
import { defaultProps, VideoProps } from "display/raw-components/Video/props";

export const craftConfig = {
  displayName: "Video",
  props: defaultProps,
  related: {
    settings: VideoSettings,
  },
};
export const CraftVideo: UserComponent<VideoProps> = (props: any) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  const {
    connectors: { connect },
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { videoId, width, height, className } = props;

  return (
    <YoutubeDiv className={className} ref={connect} enabled={enabled} width={width} height={height}>
      <YouTube
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
        }}
      />
    </YoutubeDiv>
  );
};

CraftVideo.craft = craftConfig;
