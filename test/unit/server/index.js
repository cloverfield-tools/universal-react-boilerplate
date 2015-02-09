'use strict';

var
  test = require('tape'),
  supertest = require('supertest'),
  root = require('rootrequire'),
  app = require(root + '/server');

module.exports = function client() {

  test('Index page route', function (assert) {
    supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        var
          body = res.text,

          contains = function (body) {
            return JSON.stringify(body).indexOf('Hello, world!') !== -1;
          };

        assert.error(err, 'Should not return an error.');

        assert.equal(contains(body), true,
          'Should contain the text, "Hello, World!"');

        assert.end();
      });
  });

};
