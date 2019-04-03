import React from 'react';
import PropTypes from 'prop-types';

import { DEFAULT as DEFAULT_PROPS, PROP_TYPE } from '../../../prop-types/section.container';

import { DEFAULT_ITEM_COMPONENT_ID } from '../../../constants';

import { Block, Stamp, Cancel, ActiveLabel } from './styled.componets';

import TRANSLATIONS from './translations';

const DefaultItem = ({
  id,
  className,
  style,

  item: {
    id: itemId,

    backgroundColor,

    onAdd,
    onRemove,
  
    stamp,
    active,
  },

  componentId,
}) => {
  const identifier = id || itemId;

  const elementProps = {
    ...(identifier && { id: `${componentId}-${identifier}`}),
    className: `${componentId} ${className}`,
    style,

    backgroundColor,
  };

  return (
    <Block {...elementProps}>
      {!!onRemove && <Cancel clickable={!!onRemove} onClick={onRemove && onRemove}>&times;</Cancel>}
      <Stamp clickable={!!onAdd} onClick={onAdd && onAdd}>{stamp}</Stamp>

      {(!!onRemove || !!onAdd) && (
        <ActiveLabel active={active}>
          {active ? TRANSLATIONS.STATUSES.ACTIVE : TRANSLATIONS.STATUSES.INACTIVE}
        </ActiveLabel>
      )}
    </Block>
  );
};

DefaultItem.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.shape(),
  
  item: PROP_TYPE,

  onAdd: PropTypes.func,
  onRemove: PropTypes.func,

  componentId: PropTypes.string,
};

DefaultItem.defaultProps = {
  id: null,
  className: null,
  style: {},
  
  ...DEFAULT_PROPS,

  onAdd: null,
  onRemove: null,
  
  componentId: DEFAULT_ITEM_COMPONENT_ID,
};

export default DefaultItem;
