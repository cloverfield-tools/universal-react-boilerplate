import React from 'react';

import { match, Route, RoutingContext } from 'react-router';

import { renderToString } from 'react-dom/server';

import render from './render.js';
import renderLayout from './render-layout.js';

import TestPage from '../../../shared/components/TestPage';

const routes = (
  <Route path="/" component={TestPage}>
    <Route path="/test" component={TestPage}/>
  </Route>
);

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).send(renderToString(<RoutingContext { ...renderProps } />));
    } else {
      res.status(404).send('Not found');
    }
  });
};
