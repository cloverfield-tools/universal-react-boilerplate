import React from 'react';
import ReactDOM from 'react-dom';

import createApp from '../shared/components/App';
import { Provider } from 'react-redux';
import configureStore from 'shared/configureStore';

const store = configureStore(window.BOOTSTRAP_CLIENT_STATE);

store.subscribe(() => console.log(store.getState()));

const App = createApp(React);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
