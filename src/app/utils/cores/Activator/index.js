import { STATUSES, STATUSES_SHAPE } from './constants';

const { ON, OFF } = STATUSES;

const Activator = ({ status = OFF } = {}) => {
  const STATUSES = STATUSES_SHAPE;

  if (!STATUSES.byStatus[status]) {
    throw new Error('Invalid state!');
  }

  let state = {
    status,
  };

  const isActive = () => state.status === ON;
  const compareStatus = status => state.status === status;

  const getAvailableStatuses = () => {
    return STATUSES.byStatus;
  }

  const setStatus = ({ status }) => () => {
    if (!STATUSES.byStatus[status]) {
      throw new Error('Invalid state!');
    }

    state = { ...state, status };
    
    return this;
  }

  const setActiveStatus = setStatus({ status: ON });
  const setInactiveStatus = setStatus({ status: OFF });

  const toggleStatus = ({ status } = {}) =>  {
    setStatus({ status })();
  }
    
  const getStatus = () => {
    return state.status;
  }

  return {
    isActive,
    compareStatus,
    getStatus,

    toggleStatus,
    setActiveStatus,
    setInactiveStatus,

    getAvailableStatuses,
  };
};

Activator.STATUSES = {ON, OFF};

export default Activator;
