import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const configureStore = (initialState = {}) => {
  return compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
