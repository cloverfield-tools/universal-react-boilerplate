'use strict';

var
  app = require('../lib/app'), // shared application code

  // An express-API compatible router for the browser.
  router = require('page');

var options = {
    router: router  // Set the app to use the browser router.
  };

app(options);
