'use strict';

const debug = require('debug')('egg-passport-taobao');
const assert = require('assert');
const Strategy = require('passport-oauth2').Strategy;

module.exports = app => {
  const config = app.config.passportTaobao;

  config.passReqToCallback = true;
  assert(config.key, '[egg-passport-taobao] config.passportTaobao.key required');
  assert(config.secret, '[egg-passport-taobao] config.passportTaobao.secret required');
  config.clientID = config.key;
  config.clientSecret = config.secret;

  if (config.sandbox) {
    config.authorizationURL = 'https://oauth.tbsandbox.com/authorize';
    config.tokenURL = 'https://oauth.tbsandbox.com/token';
  } else {
    config.authorizationURL = 'https://oauth.taobao.com/authorize';
    config.tokenURL = 'https://oauth.taobao.com/token';
  }

  // must require `req` params
  app.passport.use('taobao', new Strategy(config, (req, accessToken, refreshToken, params, profile, done) => {
    const user = {
      provider: 'taobao',
      id: params.taobao_user_id,
      name: params.taobao_user_nick,
      displayName: params.taobao_user_nick,
      accessToken,
      refreshToken,
      params,
      profile,
    };

    debug('%s %s get user: %j', req.method, req.url, user);

    app.passport.doVerify(req, user, done);
  }));
};
