import PropTypes from 'prop-types';

const SHAPE = {
  backgroundColor: PropTypes.string,
};

export const DEFAULT = {
  backgroundColor: null,
};

export const PROP_TYPE = PropTypes.shape(SHAPE);
export const COLLECTION_PROP_TYPE = PropTypes.arrayOf(PROP_TYPE);
