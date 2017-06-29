'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportTaobao.name;
  });

  app.passport.mount('taobao');
};
