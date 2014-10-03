var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports.User = User;

module.exports.signupUser = function(newUser, cb){

  var password = hashPassword(newUser.password);

  var user = new User({
    username: newUser.username,
    password: password
  });

  user.save(function(err, user){
    if(err){
      return err;
    }
    return cb(null, user);
  });
};

module.exports.validatePassword = function(password, userSchemaPassword) {
  return bcrypt.compareSync(password, userSchemaPassword); 
};

var hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
