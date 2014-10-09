'use strict';

module.exports = function(app, passport) {
  app.use('/api/search', require('./api/search'));
  app.use('/api/user', require('./api/user'));
  

  app.post('/signup', passport.authenticate('local-signup'), function(request, response) {
    response.send(200);
  });

  app.post('/login', passport.authenticate('local-login'), function(request, response) {
    response.send(200);
  });

  app.get('/logout', function(request, response){
    request.logout();
    response.send(200);
  });

  app.get('/facebook/login', passport.authenticate('facebook'));
  app.get('/facebook/redirect', function(req, res, next) {
    console.log("in redirect: ", req.url, req.body); next(); 
  }, passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/login'
  }));

};
