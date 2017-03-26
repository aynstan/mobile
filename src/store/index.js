import { createStore, applyMiddleware } from 'redux';

// Import middlewares
import promiseMiddleware from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import initialState from './initialState';
import reducers from '../reducers';

const middleware = applyMiddleware(
  thunk,
  createLogger(),
  promiseMiddleware()
);

const store = createStore(
  reducers,
  initialState,
  middleware
);

export default store;
