import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

import AppStructureStateProvider, { ACTIVATOR_STATUSES, AVAILABLE_COMPONENTS } from './factory';
import { DEFAULT_COMPONENT_ID } from './constants';

import PageSection from '../../components/PageSection';

import WithThemeContext from './hoc/theme.context';
import { App as AppComponent } from './styled.components';


const {
  HEADER,
  ITEM,
  LOGO,

  MAIN,
  CONTAINER,
  SECTION,
  ELEMENT,
  
  FOOTER,
  CTA,
} = AVAILABLE_COMPONENTS;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      AppStructure: AppStructureStateProvider(),
    };
  }

  setStatusAs = status => container => (item) => () => {
    if (!ACTIVATOR_STATUSES[status]) {
      throw new Error('Unable to set unknown activator status!');
    }

    const { AppStructure } = this.state;

    if (!AppStructure.getTreeShape().containers.byName[container]) {
      throw new Error('Unable to set status on an unknown container!');
    }

    if (!AppStructure.getTreeShape().items.byName[item]) {
      throw new Error('Unable to set status on an unknown item!');
    }
    
    const component = AppStructure.getTreeStructure()[container][item];
    if (component.compareStatus(status)) return;

    component.toggleStatus({ status });

    this.setState({ AppStructure });
    return AppStructure;
  };

  setActiveStatusForComponent = this.setStatusAs(ACTIVATOR_STATUSES.ON);
  setInactiveStatusForComponent = this.setStatusAs(ACTIVATOR_STATUSES.OFF);

  // containers
  // // header
  setActiveStatusForHeaderChild = this.setActiveStatusForComponent(HEADER);
  setInactiveStatusForHeaderChild = this.setInactiveStatusForComponent(HEADER);
  // // main
  setActiveStatusForMainChild = this.setActiveStatusForComponent(MAIN);
  setInactiveStatusForMainChild = this.setInactiveStatusForComponent(MAIN);
  // // footer
  setActiveStatusForFooterChild = this.setActiveStatusForComponent(FOOTER);
  setInactiveStatusForFooterChild = this.setInactiveStatusForComponent(FOOTER);

  // items
  // // header
  setActiveStatusForHeaderItem = this.setActiveStatusForHeaderChild(ITEM);
  setInactiveStatusForHeaderItem = this.setInactiveStatusForHeaderChild(ITEM);
  setActiveStatusForHeaderLogo = this.setActiveStatusForHeaderChild(LOGO);
  setInactiveStatusForHeaderLogo = this.setInactiveStatusForHeaderChild(LOGO);

  // // main
  setActiveStatusForMainContainer = this.setActiveStatusForMainChild(CONTAINER);
  setInactiveStatusForMainContainer = this.setInactiveStatusForMainChild(CONTAINER);

  setActiveStatusForMainSection = this.setActiveStatusForMainChild(SECTION);
  setInactiveStatusForMainSection = this.setInactiveStatusForMainChild(SECTION);

  setActiveStatusForMainElement = this.setActiveStatusForMainChild(ELEMENT);
  setInactiveStatusForMainElement = this.setInactiveStatusForMainChild(ELEMENT);

  // // footer
  setActiveStatusForFooterCTA = this.setActiveStatusForFooterChild(CTA);
  setInactiveStatusForFooterCTA = this.setInactiveStatusForFooterChild(CTA);

  render() {
    const { componentId } = this.props;

    const tree = this.state.AppStructure.getTreeStructure();
    console.log(tree);

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {({ colors }) => (
            <AppComponent id={componentId}>
                <PageSection
                  id={HEADER}
                  ContainerProps={{
                    id: HEADER,
                    backgroundColor: colors.light,
                  }}
                  items={[
                    {
                      id: ITEM,
                      stamp: ITEM,
                      active: tree[HEADER][ITEM].isActive(),
                      onAdd: this.setActiveStatusForHeaderItem,
                      onRemove: this.setInactiveStatusForHeaderItem,
                      backgroundColor: colors.lighter,
                    },
                    {
                      id: LOGO,
                      stamp: LOGO,
                      active: tree[HEADER][LOGO].isActive(),
                      onAdd: this.setActiveStatusForHeaderLogo,
                      onRemove: this.setInactiveStatusForHeaderLogo,
                      backgroundColor: colors.darker,
                    },
                  ]} />

                <PageSection
                  id={MAIN}
                  ContainerProps={{
                    id: MAIN,
                  }}
                  items={[
                    {
                      id: CONTAINER,
                      stamp: CONTAINER,
                      active: tree[MAIN][CONTAINER].isActive(),
                      onAdd: this.setActiveStatusForMainContainer,
                      onRemove: this.setInactiveStatusForMainContainer,
                      backgroundColor: colors.darker,
                    },
                    {
                      id: SECTION,
                      stamp: SECTION,
                      active: tree[MAIN][SECTION].isActive(),
                      onAdd: this.setActiveStatusForMainSection,
                      onRemove: this.setInactiveStatusForMainSection,
                      backgroundColor: colors.light,
                    },
                    {
                      id: ELEMENT,
                      stamp: ELEMENT,
                      active: tree[MAIN][ELEMENT].isActive(),
                      onAdd: this.setActiveStatusForMainElement,
                      onRemove: this.setInactiveStatusForMainElement,
                      backgroundColor: colors.darker,
                    },
                  ]} />

                  <PageSection
                    id={FOOTER}
                    ContainerProps={{
                      id: FOOTER,
                      backgroundColor: colors.darker,
                    }}
                    items={[
                      {
                        id: CTA,
                        stamp: CTA,

                        active: tree[FOOTER][CTA].isActive(),
                        onAdd: this.setActiveStatusForFooterCTA,
                        onRemove: this.setInactiveStatusForFooterCTA,
                        backgroundColor: colors.lightest,
                      },
                    ]} />
            </AppComponent>
          )}
        </ThemeContext.Consumer>
      </React.Fragment>
    );
  }
};

App.propTypes = {
  componentId: PropTypes.string,
};

App.defaultProps = {
  componentId: DEFAULT_COMPONENT_ID,
};

export default WithThemeContext(App);
