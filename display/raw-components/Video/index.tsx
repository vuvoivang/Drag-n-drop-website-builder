import React from "react";
import YouTube from "react-youtube";
import { YoutubeDiv } from "./styled";
import { defaultProps } from "./props";
import { VideoProps } from "display/raw-components/Video/props";

export const Video = (props: VideoProps) => {
  const { className, videoId, width, height, enabled } = props;

  return (
    <YoutubeDiv width={width} height={height} enabled={enabled}>
      <YouTube
        className={className}
        videoId={videoId}
        opts={{
          width: "100%",
          height: "100%",
        }}
      />
    </YoutubeDiv>
  );
};

Video.defaultProps = defaultProps;
