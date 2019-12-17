import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import signUp from './reducers/user';

export default () => {
  const enhancer = applyMiddleware(thunk, createLogger());

  return createStore(combineReducers({ signUp }), enhancer);
}