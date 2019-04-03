import Activator from '../../../../utils/cores/Activator';

import { AVAILABLE_COMPONENTS, AVAILABLE_CONTAINERS, AVAILABLE_ITEMS } from './constants';

const ACTIVATOR_STATUSES = Activator.STATUSES;

const {
  HEADER,
  MAIN,
  FOOTER,
} = AVAILABLE_CONTAINERS;

const { 
  ITEM,
  LOGO,
  
  CONTAINER,
  SECTION,
  ELEMENT,

  CTA,
} = AVAILABLE_ITEMS;

// containers

const AppStructureFactory = () => {
  const tree = {
    [HEADER]: {
      [LOGO]: Activator({ status: Activator.STATUSES.OFF }),
      [ITEM]: Activator({ status: Activator.STATUSES.ON }),
    },
    [MAIN]: {
      [CONTAINER]: Activator({ status: Activator.STATUSES.OFF }),
      [SECTION]: Activator({ status: Activator.STATUSES.OFF }),
      [ELEMENT]: Activator({ status: Activator.STATUSES.OFF }),
    },
    [FOOTER]: {
      [CTA]: Activator({ status: Activator.STATUSES.OFF }),
    }
  };

  const treeShape = {
    containers: {
      items: [HEADER, MAIN, FOOTER],
      itemNames: [HEADER, MAIN, FOOTER],
      byName: {
        HEADER,
        MAIN,
        FOOTER,
      },
    },
    items: {
      items: [ITEM, LOGO, CONTAINER, SECTION, ELEMENT, CTA],
      itemNames: [ITEM, LOGO, CONTAINER, SECTION, ELEMENT, CTA],
      byName: {
        ITEM,
        LOGO,
        CONTAINER,
        SECTION,
        ELEMENT,
        CTA,
      },
    },
  };
  
  function AppStructure() {
    const getFlatTreeShape = () => {
      return AVAILABLE_COMPONENTS;
    };

    const getTreeShape = () => {
      return treeShape;
    };
  
    const getTreeStructure = () => {
      return tree;
    };

    return {
      getFlatTreeShape,
      getTreeShape,
      getTreeStructure,
    };
  };

  AppStructure.AVAILABLE_COMPONENTS = AVAILABLE_COMPONENTS;

  return AppStructure;
};

export default AppStructureFactory();

export {
  ACTIVATOR_STATUSES,
  AVAILABLE_COMPONENTS,
  AVAILABLE_CONTAINERS,
  AVAILABLE_ITEMS,
};
