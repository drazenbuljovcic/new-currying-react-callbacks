import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageSection from 'app/modules/core/components/PageSection';
import DefultPageSectionContainer from 'app/modules/core/components/PageSection/Components/Containers/Default';
import DefultPageSectionItem from 'app/modules/core/components/PageSection/Components/Items/Default';

const TestContainer = () => {};
const TestItem = () => {};

describe('Page section component', () => {
  it('should render with it\'s default snapshot', () => {
    const section = shallow(<PageSection />);
    expect(toJson(section)).toMatchSnapshot();
  });

  it('should render with the default container', () => {
    const section = shallow(<PageSection />);
    expect(section.find(DefultPageSectionContainer).length).toEqual(1);
  });

  it('should render with a custom container', () => {
    const section = shallow(<PageSection
      Container={TestContainer} />);
    expect(section.find(TestContainer).length).toEqual(1);
  });

  describe('Page section container component', () => {
    it('should render with the default item', () => {
      const container = shallow(<DefultPageSectionContainer items={[{ id: 'item 1' }]} />);
      expect(container.find(DefultPageSectionItem).length).toEqual(1);
    });

    it('should render with a custom item', () => {
      const container = shallow(<DefultPageSectionContainer
        Item={TestItem}
        items={[{ id: 'item 1' }]} />);
      expect(container.find(TestItem).length).toEqual(1);
    });
  });
});
