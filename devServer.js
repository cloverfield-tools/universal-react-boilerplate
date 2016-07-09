import open from 'open';
import log from 'server/log';
import settings from 'server/settings';
import app from 'server/app';
import webpack from 'webpack';
import config from './webpack.config.dev';

const compiler = webpack(config);
const NODE_PORT = process.env.NODE_PORT || settings.NODE_PORT;
const NODE_HOST = process.env.NODE_HOST || settings.NODE_HOST;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

const serverURL = `http://${NODE_HOST}:${NODE_PORT}`;
const logAndOpen = () => {
  log.info(`Listening at ${serverURL}`);
  open(serverURL);
};

app.listen(NODE_PORT, NODE_HOST, (err) => err ? console.error(err) : logAndOpen());
