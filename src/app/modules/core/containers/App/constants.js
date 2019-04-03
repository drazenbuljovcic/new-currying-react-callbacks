export const DEFAULT_COMPONENT_ID = 'App';

// header
const HEADER = 'HEADER';
const ITEM = 'ITEM';
const LOGO = 'LOGO';

// main
const MAIN = 'MAIN';
const CONTAINER = 'CONTAINER';
const SECTION = 'SECTION';
const ELEMENT = 'ELEMENT';

// footer
const FOOTER = 'FOOTER';
const CTA = 'CTA';

export const AVAILABLE_CONTAINERS = {
  HEADER,
  MAIN,
  FOOTER,
};

export const AVAILABLE_ITEMS = {
  ITEM,
  LOGO,
  
  CONTAINER,
  SECTION,
  ELEMENT,

  CTA,
};

export const AVAILABLE_COMPONENTS = {
  ...AVAILABLE_CONTAINERS,
  ...AVAILABLE_ITEMS,
};