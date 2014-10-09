var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  receivedMessages:[{
    userID: String,
    userName: String,
    petTypes:{
      dog: Boolean,
      cat: Boolean
    },
    date: {
      start: String,
      end: String
    },
    message: String
  }],
  //sitter profile info
  isSitter: Boolean,
  location: String,
  zip: Number,
  photo: String,
  cost: Number,
  rating: Number,
  bio: String,
  dogs: Boolean,
  cats: Boolean,
  rating: {
    currentRating: Number,
    totalRatings: Number
  },
  pets:[{
    imageUrl: String,
    petName: String
  }],
  transaction: [{
    otherUser: String, //user that bought or sold from current user
    otherUserID: String,// other user's id
    type: String, // type of transaction (buy/sell)
    value: Number, // how much the transaction cost
    isRated: Boolean // if transaction has already been rated
  }]

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

module.exports.setRating = function(username, newRating){
  User.find({
    username:username
  }, function(err, user){
    user.rating.currentRating = (user.rating.currentRating + newRating)/(++user.rating.totalRatings);
    user.save(function(err){
      if(err) console.log("Failed to set rating.")
      else{
        console.log('Rating was successfully saved.')
      }
    })
  });
}

module.exports.validatePassword = function(password, userSchemaPassword) {
  return bcrypt.compareSync(password, userSchemaPassword); 
};

var hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

module.exports.testUsers = function(request, response){
  console.log('bandit strikes!');
  User.find(function(err, user){
    console.log('user: ', user);
    response.end(JSON.stringify(user));
  });
};
