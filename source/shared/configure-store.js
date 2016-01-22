import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { browserHistory } from 'react-router';
import reducers from 'shared/reducers';

const logger = createLogger();
const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}));

const reduxRouterMiddleware = syncHistory(browserHistory);

const configureStore = (initialState = {}) => {
  return compose(
    applyMiddleware(thunkMiddleware, logger, reduxRouterMiddleware)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
