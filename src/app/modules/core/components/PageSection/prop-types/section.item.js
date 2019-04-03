import PropTypes from 'prop-types';

const SHAPE = {
  stamp: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export const DEFAULT = {
  stamp: null,
  backgroundColor: null,
};

export const PROP_TYPE = PropTypes.shape(SHAPE);
export const COLLECTION_PROP_TYPE = PropTypes.arrayOf(PROP_TYPE);
