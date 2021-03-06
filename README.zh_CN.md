# egg-passport-taobao

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-taobao.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-taobao
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-taobao.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-taobao
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-taobao.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-taobao?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-taobao.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-taobao
[snyk-image]: https://snyk.io/test/npm/egg-passport-taobao/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-taobao
[download-image]: https://img.shields.io/npm/dm/egg-passport-taobao.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-taobao

<!--
Description here.
-->
淘宝开放登录插件

## 依赖说明

### 依赖的 egg 版本

egg-passport-taobao 版本 | egg 1.x
--- | ---
1.x | 😁

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.passportTaobao = {
  enable: true,
  package: 'egg-passport-taobao',
};
```

## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。
尽可能描述详细。
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

## 详细配置

```js
// {app_root}/config/config.default.js
exports.passportTaobao = {
  key: 'EGG_PASSPORT_TAOBAO_CLIENT_ID',
  secret: 'EGG_PASSPORT_TAOBAO_CLIENT_SECRET',
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
