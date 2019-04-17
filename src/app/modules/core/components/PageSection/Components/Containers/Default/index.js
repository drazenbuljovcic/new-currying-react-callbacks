import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT as DEFAULT_PROPS, SHAPE as DEFAULT_SHAPE } from '../../../prop-types/section.container';
import { COLLECTION_PROP_TYPE as ITEM_COLLECTION_PROP_TYPE } from '../../../prop-types/section.item';

import { DEFAULT_CONTAINER_COMPONENT_ID } from '../../../constants';

import DefaultItem from '../../Items/Default';

import { Wrapper } from './styled.components';

const DefaultContainer = ({
  id,
  className,
  style,

  backgroundColor,

  items,

  Item,

  componentId,
}) => {
  const elementProps = {
    ...(id && { id: `${componentId}-${id}` }),
    className: `${componentId} ${className}`,
    style,

    backgroundColor,
  };

  return (
    <Wrapper {...elementProps}>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </Wrapper>
  );
};

DefaultContainer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape(),

  ...DEFAULT_SHAPE,

  items: ITEM_COLLECTION_PROP_TYPE,

  wide: PropTypes.bool,
  high: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,

  Item: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  ItemProps: PropTypes.shape(),

  componentId: PropTypes.string,
};

DefaultContainer.defaultProps = {
  id: null,
  className: null,
  style: {},

  ...DEFAULT_PROPS,

  Item: DefaultItem,
  ItemProps: {},

  componentId: DEFAULT_CONTAINER_COMPONENT_ID,
};

export default DefaultContainer;
