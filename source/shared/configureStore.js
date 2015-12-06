import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = (initialState = {}) => {
  return compose(
    applyMiddleware(thunkMiddleware)
  )(createStore)(rootReducer, initialState);
};

export default configureStore;
