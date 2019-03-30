import React from 'react';

import AppStructureStateProvider, { ACTIVATOR_STATUSES, AVAILABLE_COMPONENTS } from './factory';

import PageSection from '../../components/PageSection';

const {
  HEADER,
  ITEM,
  LOGO,

  MAIN,
  CONTAINER,
} = AVAILABLE_COMPONENTS;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      AppStructure: AppStructureStateProvider(),
    };

    console.log(this.state.AppStructure.AVAILABLE_COMPONENTS)
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

  // items
  // // header
  setActiveStatusForHeaderItem = this.setActiveStatusForHeaderChild(ITEM);
  setInactiveStatusForHeaderItem = this.setInactiveStatusForHeaderChild(ITEM);
  setActiveStatusForHeaderLogo = this.setActiveStatusForHeaderChild(LOGO);
  setInactiveStatusForHeaderLogo = this.setInactiveStatusForHeaderChild(LOGO);

  // // main
  setActiveStatusForMainContainer = this.setActiveStatusForMainChild(CONTAINER);
  setInactiveStatusForMainContainer = this.setInactiveStatusForMainChild(CONTAINER);

  render() {
    const tree = this.state.AppStructure.getTreeStructure();

    return (
      <div className="App">
        <div>
          <button onClick={this.setActiveStatusForHeaderItem}>SET</button>
          <p>{tree[HEADER][ITEM].isActive() ? 'active' : 'inactive'}</p>
          <button onClick={this.setInactiveStatusForHeaderItem}>SET</button>
        </div>

        <div>
          <button onClick={this.setActiveStatusForHeaderLogo}>SET</button>
          <p>{tree[HEADER][LOGO].isActive() ? 'active' : 'inactive'}</p>
          <button onClick={this.setInactiveStatusForHeaderLogo}>SET</button>
        </div>
      </div>
    );
  }
};

export default App;
