const ON = 'ON';
const OFF = 'OFF';

const Activator = ({ status }) => {
  const STATUSES = {
    statuses: [ON, OFF],
    byStatus: {
      [ON]: ON,
      [OFF]: OFF,
    },
  };

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

  const toggleStatus = ({ status }) =>  {
    switch (status) {
      case getAvailableStatuses().ON: {
        setActiveStatus();
        return this;
      }
      case getAvailableStatuses().OFF: {
        setInactiveStatus();
        return this;
      }
      default: return this;
    }
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
