import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const store = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware),
)(createStore)(rootReducer, {});

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
