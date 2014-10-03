var LocalStrategy = require('passport-local').Strategy;
var User = require('../../config/seed.js').users;
var passport = require('passport');

module.exports = function(){
  console.log("passport:", passport);

  // used to serialize the user for the session
  passport.serializeUser(function(user, done){
    console.log('user: ', user.username);
    done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser(function(user, done){
    // User.findById(id, function(err, user){
      console.log(use)
      done(null, user);
    // });
  });

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function(request, username, password, done){
    console.log('passport.js cb');
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


};

// exports.setup = function(User){
//   passport.use(new LocalStrategy(
//     function(username, password, done){
//       User.findOne({ username: username }, function(err, use){
//         if(err){
//           return done(err);
//         }
//         if(!user){
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         if(!user.validPassword(password)){
//           return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//       });
//     }
//   ));
// };
