import path from 'path';
import express from 'express';
import settings from './settings';

import render from './render.js';
import renderLayout from './render-layout.js';

const app = express();

const port = process.env.APP_PORT || 3000;
const title = 'Your App';
const props = {
  title: 'Your App'
};
const buildDir = '/build';
const staticDir = path.join(settings.APP_HOME, buildDir);

const rootMarkup = render(props);

// This will be rendered into the HTML to pass data to the client.
const payload = `
  var payload = {
    title: '${ props.title }'
  };
`;

app.use('/static', express.static(staticDir));

app.get('*', (req, res) => {
  res.send(renderLayout({ title, rootMarkup, payload}));
});

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${ 3000 }`);
});
