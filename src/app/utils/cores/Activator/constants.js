export const STATUSES = {
  ON: 'ON',
  OFF: 'OFF',
};

const { ON, OFF } = STATUSES;

export const STATUSES_SHAPE = {
  statuses: [ON, OFF],
  byStatus: {
    [ON]: ON,
    [OFF]: OFF,
  },
};
