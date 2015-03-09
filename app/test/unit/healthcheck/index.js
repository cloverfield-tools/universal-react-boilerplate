'use strict';

var
  test = require('tape'),
  supertest = require('supertest'),
  app = require('healthcheck'),
  fs = require('fs'),
  root = require('rootrequire');

var 
  pkg = require(root + '/package.json'),
  buildPath = root + '/config/BUILD',
  build = fs.readFileSync(buildPath, 'utf8').trim();

module.exports = function client() {

  test('Healthcheck server', function (assert) {
    supertest(app)
      .get('/version')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        var
          body = JSON.parse(res.text),
          name = pkg.name,
          version = pkg.version;

        assert.error(err, 'Should not return an error.');

        assert.equal(name, body.name,
          'Should return app name');

        assert.equal(version, body.version,
          'Should return app version');

        assert.equal(build, body.build,
          'Should return app build hash');

        assert.end();
      });
  });

};
