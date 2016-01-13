import app from 'server/app.js';

const port = process.env.APP_PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${ port }`);
});
