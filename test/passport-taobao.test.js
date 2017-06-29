'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/passport-taobao.test.js', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'apps/passport-taobao-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should GET /', () => {
    return request(app.callback())
      .get('/')
      .expect('hi, passportTaobao')
      .expect(200);
  });

  it('should GET /passport/taobao redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/taobao')
      .expect('Location', /^https:\/\/oauth.taobao.com\/authorize/)
      .expect(302);
  });

  it('should GET /passport/taobao/callback redirect to auth url', () => {
    return request(app.callback())
      .get('/passport/taobao/callback')
      .expect('Location', /^https:\/\/oauth.taobao.com\/authorize/)
      .expect(302);
  });
});
