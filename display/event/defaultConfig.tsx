import { CLICK_TYPE } from "display/raw-components/constant";

export const DEFAULT_SECTIONS = {
  navigate: {
    title: "Navigate",
    events: ["navigate"],
    items: ["pageNavigate", "absoluteUrlNavigate"],
  },
  scrollTo: {
    title: "Scroll",
    events: ["href"],
    items: ["href"],
  },
  popup: {
    title: "Show popup",
    events: ["popup"],
    items: ["popup"],
  },
  clickType: {
    title: "Action when click",
    events: ["clickType"],
    items: ["clickType"],
  },
  showPopup: {
    title: "Show or Hide pop up",
    events: ["showPopup"],
    items: ["showPopup"],
  },
};

export const DEFAULT_EVENT_KEYS = {
  pageNavigate: {
    eventKey: "navigate",
    type: ["select"],
    label: "Choose page to navigate",
    full: true,
  },
  absoluteUrlNavigate: {
    eventKey: "navigate",
    type: ["text"],
    label: "What's the web address (URL)?",
    full: true,
  },
  href: {
    eventKey: "href",
    type: ["select"],
    label: "Choose section in this page for scrolling to when clicked",
    full: true,
  },
  popup: {
    eventKey: "popup",
    type: ["popup"],
    label: "Custom pop-up when clicked",
    full: true,
  },
  clickType: {
    eventKey: "clickType",
    type: ["select"],
    label: "Choose applied action type when click",
    full: true,
    selectChildren: [
      {
        value: CLICK_TYPE.NAVIGATE,
        label: "Navigate",
      },
      {
        value: CLICK_TYPE.POP_UP,
        label: "Show pop up",
      },
    ],
  },
  showPopup: {
    eventKey: "showPopup",
    type: ["oneOptionCheckbox"],
    label: "",
    checkboxChildren: [
      {
        value: "showPopup",
        label: "Show pop up",
      }
    ],
  },
};