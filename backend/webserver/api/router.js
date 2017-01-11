'use strict';

module.exports = function(dependencies, lib, router) {

  const authorizationMW = dependencies('authorizationMW');
  var controller = require('./controller')(dependencies, lib);
  var middleware = require('./middleware')(dependencies, lib);

  router.get('/pad/:userId', authorizationMW.requiresAPILogin, controller.getAllPadsByUserId);

  router.get('/pad/author/:userId', authorizationMW.requiresAPILogin, controller.getPadsByAuthorId);

  router.get('/pad/coAuthor/:userId', authorizationMW.requiresAPILogin, controller.getPadsByCoAuthorId);

  /*router.delete('/:channelId', authorizationMW.requiresAPILogin, middleware.passThrough, controller.sayHello);

  router.post('/close/:channelId', authorizationMW.requiresAPILogin, middleware.passThrough, controller.sayHello);*/

  return router;
};
