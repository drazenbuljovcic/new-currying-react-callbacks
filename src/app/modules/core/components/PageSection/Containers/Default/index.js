import React from 'react';
import PropTypes from 'prop-types';

import DefaultItem from '../../Items/Default';

const DefaultContainer = ({
  Item
}) => (
  <Item />
);

DefaultContainer.propTypes = {
  Item: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
};

DefaultContainer.defaultProps = {
  Item: DefaultItem,
};

export default DefaultContainer;
