'use strict';

var
  test = require('tape'),
  supertest = require('supertest'),
  app = require('server'),
  arrayIntersect = require('array-intersection');

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

  test('X-powered by header', function (assert) {
    supertest(app)
      .get('/')
      .expect(200)
      .end(function (err, res) {
        var
          headers = res.headers,
          headerKeys = Object.keys(headers),
          keys = ['X-powered-by', 'x-powered-by', 'X-Powered-By'],
          intersection = arrayIntersect(keys, headerKeys);

        assert.error(err, 'Should not return an error.');

        assert.deepEqual(intersection, [],
          'Should not send x-powered-by headers');

        assert.end();

      });
  });

};
