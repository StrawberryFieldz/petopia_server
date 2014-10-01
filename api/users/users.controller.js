'use strict';

// var Users = require('../../config/seed.js').users;
var Users = require('../../sql/tables/db_users.js');

exports.byUserId = function(request, response) {
  var results = {
    users: []
  };

  for(var key in Users){
    var user = {};
    user.username = Users[key].username;
    results.users.push(user);
  }

  return response.json(200, results);
};

exports.findUser = function(request, response){
  var userEmail = request.body.email;

  Users.checkUser(userEmail, function(err, results){
    if(err){
      return response.json(200, 'User does not exist.');
    } else {
      return response.json(200, 'User ' + results + 'exists.');
    }
  });

};

exports.createUser  = function(request, response){
  var user = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    password: request.body.password,
    email: request.body.email
  };
  console.log(request);

  Users.saveUser(user, function(err, results){
    return response.json(200, 'User succesfully saved to database.');
  });

};
