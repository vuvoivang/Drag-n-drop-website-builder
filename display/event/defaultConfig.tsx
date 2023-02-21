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
};
