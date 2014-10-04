'use strict';

module.exports = function(app, passport) {

  app.use('/api/search', require('./api/search'));
  app.get('/login', require('./db/tables/db_users.js').testUsers);
  app.post('/signup', passport.authenticate('local-signup'));
  app.post('/login', passport.authenticate('local-login'));
  
};
