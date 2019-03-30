import React from 'react';
import PropTypes from 'prop-types';

import DefaultContainer from './Containers/Default';
import DefaultItem from './Items/Default';

const PageSection = ({ Container, Item }) => (
  <Container
    Item={Item} />
);

PageSection.propTypes = {
  Container: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  Item: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
};

PageSection.defaultProps= {
  Container: DefaultContainer,
  Item: DefaultItem,
};

export default PageSection;
