import Activator from '../../../../utils/cores/Activator';

// header
const HEADER = 'HEADER';
const ITEM = 'ITEM';
const LOGO = 'LOGO';

// main
const MAIN = 'MAIN';
const CONTAINER = 'CONTAINER';

const ACTIVATOR_STATUSES = Activator.STATUSES;

const AVAILABLE_COMPONENTS = {
  HEADER,
  ITEM,
  LOGO,
  
  MAIN,
  CONTAINER,
};

const AppStructureFactory = () => {
  const tree = {
    [HEADER]: {
      [LOGO]: Activator({ status: Activator.STATUSES.OFF }),
      [ITEM]: Activator({ status: Activator.STATUSES.ON }),
    },
    [MAIN]: {
      [CONTAINER]: Activator({ status: Activator.STATUSES.OFF }),
    },
  };

  const treeShape = {
    containers: {
      items: [HEADER, MAIN],
      itemNames: [HEADER, MAIN],
      byName: {
        HEADER,
        MAIN,
      },
    },
    items: {
      items: [ITEM, LOGO, CONTAINER],
      itemNames: [ITEM, LOGO, CONTAINER],
      byName: {
        ITEM,
        LOGO,
        CONTAINER,
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

export { ACTIVATOR_STATUSES, AVAILABLE_COMPONENTS };
