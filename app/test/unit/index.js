'use strict';

var
  server = require('./server'),
  versionHealthchecker = require('./version-healthchecker');

server();
versionHealthchecker();
