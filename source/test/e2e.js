import settings from 'server/settings';
import runner from 'nightwatch-autorun';
import server from 'server/app.js';

const NODE_PORT = process.env.NODE_PORT || settings.NODE_PORT;

runner({port: NODE_PORT, server});
