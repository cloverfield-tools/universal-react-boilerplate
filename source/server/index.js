import path from 'path';
import express from 'express';
import settings from 'server/settings';

import mainRoute from './routes/main';

const app = express();

const port = process.env.APP_PORT || 3000;

const buildDir = '/build';
const staticDir = path.join(settings.APP_HOME, buildDir);

app.use('/static', express.static(staticDir));

app.use('*', mainRoute);

app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${ port }`);
});
