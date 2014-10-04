var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../../db/tables/db_users.js');
var UserModel = require('../../db/tables/db_users.js').User;

module.exports = function() {
  // used to serialize the user for the session
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('facebook', new FacebookStrategy({
    clientID: 329762743870288,
    clientSecret: 'da16cdbd7ccd5cfbae31be348dd032a5',
    callbackURL: "http://petopia-server.azurewebsites.net/facebook/redirect"
  }, function(accessToken, refreshToken, profile, done) {
    console.log("ACCESS: ", accessToken);
    console.log("REFRESH: ", refreshToken);

    UserModel.findOne({
      username: profile.id
    }, function(err, user) {
      if(err) {
        return done(err);
      }
      if(!user) {
        var userObj = {
          username: profile.id,
          password: profile.id
        };

        User.signupUser(userObj, done);
      } else {
        return done(err, user);
      }
    });
  }));

};