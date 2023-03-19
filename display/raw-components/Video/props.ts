export type VideoProps = Partial<{
  videoId: string;
  width: string;
  height: string;
  className: string;
  enabled: boolean;
}>;

export const defaultProps: VideoProps = {
  videoId: 'MFn3n2cLUFA',
  width: '100%',
  height: 'auto',
  enabled: false,
};
