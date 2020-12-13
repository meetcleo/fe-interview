import React from 'react';
import { render } from 'enzyme';

import { MemoryRouter } from 'react-router-dom';
import { Tabs, OwnProps } from '../tabs';

describe('<Tabs >', () => {
  it('should render the component', () => {
    const mockProps: OwnProps = {
      tabs: [{ route: '/', text: 'Home' }],
    };
    const wrapper = render(
      <MemoryRouter>
        <Tabs {...mockProps} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
