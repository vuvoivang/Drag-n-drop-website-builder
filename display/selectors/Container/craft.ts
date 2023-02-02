import { defaultProps } from "./props";
import { ContainerSettings } from "./setting";

export const craftConfig = {
  displayName: "Container",
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: ContainerSettings,
  },
};
