import React from 'react';
import reactDom from 'react-dom/server';
import { RoutingContext } from 'react-router';

import { Provider } from 'react-redux';
import configureStore from 'shared/configureStore';

const render = reactDom.renderToString;

const store = configureStore(window.__INITIAL_STATE__);

store.subscribe(() => console.log(store.getState()));

const createDOM = renderProps => {
  return render(
    <Provider store={store}>
      <RoutingContext { ...renderProps } />
    </Provider>
  );
};

export default createDOM;
