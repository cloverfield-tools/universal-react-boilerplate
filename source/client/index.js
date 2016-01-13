import React from 'react';
import ReactDOM from 'react-dom';

import createRoutes from 'shared/routes';
import { Provider } from 'react-redux';
import configureStore from 'shared/configure-store';

const store = configureStore(window.BOOTSTRAP_CLIENT_STATE);

const Routes = createRoutes(React);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
