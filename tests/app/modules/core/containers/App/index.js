import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { ThemeProvider } from 'styled-components';
import theme from 'activator/src/app/modules/core/constants/theme';

import PageSection from 'app/modules/core/components/PageSection';

import App, { App as PlainAppComponent } from 'app/modules/core/containers/App';
import AppStructureStateProvider from 'app/modules/core/containers/App/factory';

describe('App component tests', () => {
  const structureProvider = AppStructureStateProvider();

  it('should match it\'s default snapshot', () => {
    const app = shallow(<App />);
    expect(toJson(app)).toMatchSnapshot();
  });
  
  it('should be wrapped in a theme context by default', () => {
    const app = shallow(<App />);
    expect(app.find(ThemeProvider).length).toEqual(1);
  });
  
  it('should be mounted with the factory component tree', () => {
    const themedApp = mount(
      <ThemeProvider theme={theme}>
        <PlainAppComponent />
      </ThemeProvider>
    );

    const appInstance = themedApp.children().instance();
    expect(structureProvider.getTreeShape())
      .toBe(appInstance.state.AppStructure.getTreeShape());;
  });

  it('should render three sections by the default configuration', () => {
    const themedApp = mount(
      <ThemeProvider theme={theme}>
        <PlainAppComponent />
      </ThemeProvider>
    );
    
    expect(themedApp.find(PageSection).length)
      .toEqual(Object.keys(structureProvider.getTreeStructure()).length);
  });
});