import React from 'react';
import reactDom from 'react-dom/server';
import { RoutingContext } from 'react-router';

import { Provider } from 'react-redux';
import store from '../../../shared/configureStore';

const render = reactDom.renderToString;

const createDOM = renderProps => {
  return render(
    <Provider store={store}>
      <RoutingContext { ...renderProps } />
    </Provider>
  );
};

export default createDOM;
