import { CLICK_TYPE } from 'display/raw-components/constant';

export const DEFAULT_SECTIONS = {
  navigate: {
    title: 'Navigate',
    events: ['navigate'],
    items: ['pageNavigate', 'absoluteUrlNavigate'],
  },
  scrollTo: {
    title: 'Scroll',
    events: ['href'],
    items: ['href'],
  },
  popup: {
    title: 'Show popup',
    events: ['popup'],
    items: ['popup'],
  },
  clickTypeButton: {
    title: 'Action when click button',
    events: ['clickType'],
    items: ['clickTypeButton'],
  },
  clickTypeAnchor: {
    title: 'Action when click anchor',
    events: ['clickType'],
    items: ['clickTypeAnchor'],
  },
  showPopup: {
    title: 'Show or Hide pop up',
    events: ['showPopup'],
    items: ['showPopup'],
  },
};

export const DEFAULT_EVENT_KEYS = {
  pageNavigate: {
    eventKey: 'pageNavigate',
    type: ['select'],
    label: 'Choose page to navigate',
    full: true,
  },
  absoluteUrlNavigate: {
    eventKey: 'absoluteUrlNavigate',
    type: ['text'],
    label: "What's the web address (URL)?",
    full: true,
  },
  href: {
    eventKey: 'href',
    type: ['select'],
    label: 'Choose section in this page for scrolling to when clicked',
    full: true,
  },
  popup: {
    eventKey: 'popup',
    type: ['popup'],
    label: 'Custom pop-up when clicked',
    full: true,
  },
  clickTypeButton: {
    eventKey: 'clickType',
    type: ['select'],
    label: 'Choose applied action type when click button',
    full: true,
    selectchildren: [
      {
        value: CLICK_TYPE.NAVIGATE,
        label: 'Navigate',
      },
      {
        value: CLICK_TYPE.POP_UP,
        label: 'Show pop up',
      },
    ],
  },
  showPopup: {
    eventKey: 'showPopup',
    type: ['oneOptionCheckbox'],
    label: '',
    checkboxChildren: [
      {
        value: 'showPopup',
        label: 'Show pop up',
      },
    ],
  },
  clickTypeAnchor: {
    eventKey: 'clickType',
    type: ['select'],
    label: 'Choose applied action type when click anchor',
    full: true,
    selectchildren: [
      {
        value: CLICK_TYPE.NAVIGATE,
        label: 'Navigate',
      },
      {
        value: CLICK_TYPE.HREF,
        label: 'Scroll to element',
      },
    ],
  },
};
