'use strict';

var
  server = require('./server'),
  healthcheck = require('./healthcheck');

server();
healthcheck();
