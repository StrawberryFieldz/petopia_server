'use strict';

module.exports = function(app, passport) {
  app.use('/api/search', require('./api/search'));
  app.use('/api/users', require('./api/users'));
  app.post('/login', passport.authenticate('local-login'));
};
