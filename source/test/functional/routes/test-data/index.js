import test from 'tape';
import request from 'supertest';
import app from 'server/app.js';

const route = '/test-data';

test(`GET ${ route }`, nest => {
  nest.test(route, assert => {
    const msg = `${ route } should not return an error`;

    request(app)
      .get(route)
      .expect(200)
      .end(err => {
        assert.error(err, msg);

        assert.end();
      });
  });
});
