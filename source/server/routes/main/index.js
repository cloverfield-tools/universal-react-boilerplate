import { match } from 'react-router';
import routes from '../../../shared/routes';

import renderLayout from './render-layout';
import render from './render';
import settings from '../../settings';

import configureStore from '../../../shared/configureStore';

const store = configureStore();
const initialState = store.getState();

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      //syncReduxAndRouter(renderProps.history, store);
      const rootMarkup = render(renderProps, store);

      res.status(200).send(renderLayout({ settings, rootMarkup, initialState }));
    } else {
      res.status(404).send('Not found');
    }
  });
};
