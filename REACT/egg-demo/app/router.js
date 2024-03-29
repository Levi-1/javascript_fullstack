'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test)
  router.get('/user', controller.user.index)
  router.get('/getid/:id', controller.user.getId) // 若通过params传递 需通过路由指明接受id参数
  router.post('/add', controller.user.add)
  router.get('/getuser', controller.user.index)
};
