import { STATUSES, STATUSES_SHAPE } from './constants';

const { ON, OFF } = STATUSES;

const Activator = ({ status = OFF } = {}) => {
  const INTERNAL_STATUSES = STATUSES_SHAPE;

  if (!INTERNAL_STATUSES.byStatus[status]) {
    throw new Error('Invalid state!');
  }

  let state = {
    status,
  };

  const isActive = () => state.status === ON;
  const compareStatus = inputStatus => state.status === inputStatus;

  const getAvailableStatuses = () => INTERNAL_STATUSES.byStatus;

  const setStatus = ({ status: inputStatus }) => () => {
    if (!INTERNAL_STATUSES.byStatus[inputStatus]) {
      throw new Error('Invalid state!');
    }

    state = { ...state, status: inputStatus };

    return this;
  };

  const setActiveStatus = setStatus({ status: ON });
  const setInactiveStatus = setStatus({ status: OFF });

  const toggleStatus = ({ status: inputStatus } = {}) => {
    setStatus({ status: inputStatus })();
  };

  const getStatus = () => state.status;

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

Activator.STATUSES = { ON, OFF };

export default Activator;
