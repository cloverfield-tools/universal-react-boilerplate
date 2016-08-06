import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'shared/reducers';

import createApp from 'shared/components/app';
import createTestData from 'shared/components/test-data';

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  // hydrating server.
  window.BOOTSTRAP_CLIENT_STATE
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


// Required for replaying actions from devtools to work
// reduxRouterMiddleware.listenForReplays(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={ history }>
      <Route path="/" component={ createApp(React) } />
      <Route path="/test-data" component={ createTestData(React) } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
