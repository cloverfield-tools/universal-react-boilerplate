import { match } from 'react-router';
import routes from '../../../shared/routes';

import renderLayout from './render-layout';
import render from './render';

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const rootMarkup = render(renderProps);
      res.status(200).send(renderLayout(rootMarkup));
    } else {
      res.status(404).send('Not found');
    }
  });
};
