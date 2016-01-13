import request from 'supertest';
import app from 'server/app.js';

export default ({ route, test, message }) => {
  test(`GET ${ route }`, nest => {
    nest.test(route, assert => {
      const msg = message || `${ route } should not return an error`;

      request(app)
        .get(route)
        .expect(200)
        .end(err => {
          assert.error(err, msg);
          assert.end();
        });
    });
  });
};
