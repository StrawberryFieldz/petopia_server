'use strict';

module.exports = function(app, passport) {

  app.use('/api/search', require('./api/search'));

  app.post('/signup', passport.authenticate('local-signup'));
  app.post('/login', passport.authenticate('local-login'));

  app.get('/facebook/login', passport.authenticate('facebook'));
  app.get('/facebook/redirect', function(req, res, next) {
    console.log("in redirect: ", req.url, req.body); next(); 
  }, passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

};
