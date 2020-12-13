import { render } from 'enzyme';
import React from 'react';

import { MOCK_BILLS } from '../../../__mocks__/mock-factory';
import { BillItem, Props } from '../bill-item';

describe('<BillItem />', () => {
  it('renders', () => {
    const mockProps: Props = {
      item: MOCK_BILLS[0],
      handleUpdateBill: jest.fn(),
    };
    const wrapper = render(<BillItem {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
