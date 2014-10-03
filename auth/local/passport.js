var LocalStrategy = require('passport-local').Strategy;
var User = require('../../db/tables/db_users.js')
var UserModel = require('../../db/tables/db_users.js').User;
var passport = require('passport');

module.exports = function(){

  // used to serialize the user for the session
  passport.serializeUser(function(user, done){
    console.log('user (from serialize): ', user.username);
    done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser(function(user, done){
    console.log("user (from deserialize): ", user.username)
    done(null, user);
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function(request, username, password, done){
      // Checks seed.js data
      for(var key in User){
        if(username === User[key]['username']){
          if(password === User[key]['password']){
            return done(null, User[key]);
          }
        }
      }
      console.log('user not validiated');
    return done(null, false);
  }));

  passport.use('local-signup', new LocalStrategy(function(username, password, done){
      UserModel.findOne({ username: username }, function(err, user){
        if(err){
          return done(err);
        }
        if(user){
          return done(null, false, { message: 'Username already exists.' });
        } else {
          var newUser = {
            username: username,
            password: password
          };

          User.signupUser(newUser, done);
        }
      });
    }
  ));

};
