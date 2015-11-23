import React from 'react';
import reactDom from 'react-dom/server';
import { RoutingContext } from 'react-router';

const render = reactDom.renderToString;

const createDOM = (props) => {
  return render(
    <RoutingContext { ...props } />
  );
};

export default createDOM;
