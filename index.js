'use strict';

var
  app = require('./lib/webserver.js'),
  configure = require('qconf');

var
  config = configure(),
  port = config.get('port') || 3000;

app.listen(port, function () {
  app.log.info('Listening on port ' + port);
});
