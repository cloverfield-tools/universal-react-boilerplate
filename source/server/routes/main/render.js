import React from 'react';
import reactDom from 'react-dom/server';
import { RoutingContext } from 'react-router';

import { Provider } from 'react-redux';

const render = reactDom.renderToString;

const createDOM = (renderProps, store) => {
  return render(
    <Provider store={store}>
      <RoutingContext { ...renderProps } />
    </Provider>
  );
};

export default createDOM;
