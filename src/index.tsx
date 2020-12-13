import React from 'react';
import ReactDOM from 'react-dom';

import { Root } from './features/root';
import { store } from './redux/store';

import './index.scss';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
