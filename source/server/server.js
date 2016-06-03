import settings from 'server/settings';
import app from 'server/app.js';

const host = process.env.APP_HOST || settings.APP_HOST;
const port = process.env.APP_PORT || settings.APP_PORT;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${ host }:${ port }`);
});
