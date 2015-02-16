'use strict';

var
  app = require('version-healthchecker'),
  configure = require('qconf');

var
  config = configure(),
  port = config.get('version-healthchecker-port') || 3001;

app.listen(port, function () {
  app.log.info('Listening on port ' + port);
});
