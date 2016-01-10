import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext } from 'react-router';
import { Provider } from 'react-redux';

const createDOM = (renderProps, store) => {
  return renderToString(
    <Provider store={store}>
      <RoutingContext { ...renderProps } />
    </Provider>
  );
};

export default createDOM;
