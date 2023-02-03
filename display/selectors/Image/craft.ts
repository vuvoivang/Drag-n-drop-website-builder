import { PLACEHOLDER_IMAGE_URL } from "display/constants";
import { ImageProps } from "./props";
import { ImageSettings } from "./setting";

export const craftConfig = {
    displayName: 'Image',
    props: {
      alt: 'alternative description',
      src: PLACEHOLDER_IMAGE_URL,
      width: "400px",
      height: "auto",
      radius: 10,
      objectFit: "cover",
    } as ImageProps,
    related: {
      toolbar: ImageSettings,
    },
  }