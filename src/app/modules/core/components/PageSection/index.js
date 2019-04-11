import React from 'react';
import PropTypes from 'prop-types';

import { COLLECTION_PROP_TYPE } from './prop-types/section.item';

import { DEFAULT_COMPONENT_ID, DEFAULT_CONTAINER_COMPONENT_ID, DEFAULT_ITEM_COMPONENT_ID } from './constants'

import theme from '../../constants/theme';

import DefaultContainer from './Components/Containers/Default';
import DefaultItem from './Components/Items/Default';

import { Wrapper } from './styled.components';

const { colors } = theme;

const PageSection = ({
  id,
  className,
  style,

  items,

  Container,
  ContainerProps,

  Item,
  ItemProps,

  componentId,
}) => {
  const elementProps = {
    id: `${componentId}-${id}`,
    className: `${componentId} ${className}`,
    style,
  };

  const internalContainerProps = {
    ...ContainerProps,
    componentId: DEFAULT_CONTAINER_COMPONENT_ID,
  };

  const internalItemProps = {
    ...ItemProps,
    componentId: DEFAULT_ITEM_COMPONENT_ID,
  };

  return (
    <Wrapper {...elementProps}>
      <Container
        Item={Item}
        ItemProps={internalItemProps}
        items={items}
        {...internalContainerProps} />
    </Wrapper>
  );
};

PageSection.AVAILABLE_CONTAINERS = {
  default: DefaultContainer,
};

PageSection.AVAILABLE_ITEMS = {
  default: DefaultItem,
};

PageSection.AVAILABLE_COLORS = {
  default: colors.default,
  black: colors.default,
};

PageSection.propTypes = {
  items: COLLECTION_PROP_TYPE,

  Container: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  ContainerProps: PropTypes.shape(),

  Item: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  ItemProps: PropTypes.shape(),

  componentId: PropTypes.string,
};

PageSection.defaultProps = {
  items: [],

  Container: PageSection.AVAILABLE_CONTAINERS.default,
  ContainerProps: {},

  Item: PageSection.AVAILABLE_ITEMS.default,
  ItemProps: {},

  componentId: DEFAULT_COMPONENT_ID,
};

export default PageSection;
