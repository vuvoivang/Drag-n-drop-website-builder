export const PLACEHOLDER_IMAGE_URL = "https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg";

export type ImageProps = Partial<{
  alt: string;
  src: string;
  width: string;
  height: string;
  radius: number;
  className: string;
  objectFit: string;
}>;
export const defaultProps: ImageProps = {
  alt: "alternative description",
  src: PLACEHOLDER_IMAGE_URL,
  width: "400px",
  height: "auto",
  radius: 10,
  objectFit: "cover",
};
