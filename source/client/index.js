import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from 'shared/configureStore';

const store = configureStore(window.BOOTSTRAP_CLIENT_STATE);

store.subscribe(() => console.log(store.getState()));

const createDOM = renderProps => {
  return renderToString(
    <Provider store={store}>
      <RoutingContext { ...renderProps } />
    </Provider>
  );
};

export default createDOM;
