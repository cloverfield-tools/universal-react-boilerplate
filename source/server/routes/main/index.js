import settings from 'server/settings';

import render from './render.js';
import renderLayout from './render-layout.js';

const title = settings.TITLE;

const props = {
  title
};

const rootMarkup = render(props);

// This will be rendered into the HTML to pass data to the client.
const payload = `
  var payload = {
    title: '${ props.title }'
  };
`;

export default (req, res) => {
  res.send(renderLayout({ title, rootMarkup, payload}));
};
