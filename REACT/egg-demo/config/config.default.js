/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588853251675_9692';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false
    },
    domainWhiteList: [ '*' ],// 配置白名单
  }
  config.cors = {
    origin: '*',// 允许跨域访问，注释掉则允许白名单访问
    credentials: true, // 允许cookie跨域
    allwoMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  return {
    ...config,
    ...userConfig,
  };
};

//config/config.default.js
// config.security = {
//   csrf: {
//     enable: false,
//     ignoreJSON: true
//   },
//   domainWhiteList: [ '*' ],// 配置白名单
// }

// config.cors = {
//   origin: '*',// 允许跨域访问，注释掉则允许白名单访问
//   credentials: true, // 允许cookie跨域
//   allwoMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
// }