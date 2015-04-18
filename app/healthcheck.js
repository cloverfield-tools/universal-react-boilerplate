'use strict';

var
  app = require('healthcheck'),
  configure = require('qconf');

var
  config = configure(),
  port = config.get('healthcheck-port') || 3001;

app.listen(port, function () {
  app.log.info('Listening on port ' + port);
});
