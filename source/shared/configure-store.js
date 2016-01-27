import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { routeReducer } from 'react-router-redux';
import reducers from 'shared/reducers';

const logger = createLogger();
const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const configureStore = (initialState = {}) => {
  return compose(
    applyMiddleware(thunkMiddleware, logger)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
