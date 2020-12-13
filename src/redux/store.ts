import { createStore, applyMiddleware, Middleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/root-reducer';

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
