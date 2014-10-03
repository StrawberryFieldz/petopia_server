var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);
module.exports.User = User;

module.exports.signupUser = function(newUser, cb){

  var user = new User({
    username: newUser.username,
    password: newUser.password
  });

  user.save(function(err, user){
    if(err){
      return err;
    }
    console.log("got to signup")
    return cb(null, user);
  });
};
