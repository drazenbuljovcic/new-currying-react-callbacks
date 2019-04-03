import styled from 'styled-components';

import {
  DEFAULT_COMPONENT_ID as SECTION_DEFAULT_COMPONENT_ID,
  DEFAULT_CONTAINER_COMPONENT_ID,
} from '../../components/PageSection/constants';

import { AVAILABLE_CONTAINERS } from './constants';

const {
  HEADER,
  MAIN,
  FOOTER,
} = AVAILABLE_CONTAINERS;

const App = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  ${({ theme }) => `
    color: ${theme.colors.white};
    text-shadow: ${theme.shadows.text.normal};
  `}

  ${`#${SECTION_DEFAULT_COMPONENT_ID}-${HEADER}`} {
    height: 250px;

    ${`#${DEFAULT_CONTAINER_COMPONENT_ID}-${HEADER}`} {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  ${`#${SECTION_DEFAULT_COMPONENT_ID}-${MAIN}`} {
    flex: 1;

    ${`#${DEFAULT_CONTAINER_COMPONENT_ID}-${MAIN}`} {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }

  ${`#${SECTION_DEFAULT_COMPONENT_ID}-${FOOTER}`} {
    ${`#${DEFAULT_CONTAINER_COMPONENT_ID}-${FOOTER}`} {
      display: flex;
      justify-content: center;
    }
  }
`;

export { App };
