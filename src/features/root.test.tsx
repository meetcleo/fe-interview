import React from 'react';
import ReactDOM from 'react-dom';

import { AppState } from '../types/app';
import { mockStore } from '../__mocks__/mock-store';
import { Root } from './root';

describe('<Root />', () => {
  it('renders', () => {
    const mockAppState: AppState = {
      bills: {
        items: [],
        isFetching: false,
      },
    };
    const store = mockStore(mockAppState);
    const div = document.createElement('div');

    ReactDOM.render(<Root store={store} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
