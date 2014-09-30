'use strict';

var Users = require('../../config/seed.js').users;

exports.index = function(request, response) {
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

exports.byUsername = function(request, response){
  var results = {
    user: []
  };

  for(var key in Users){
    if(Users[key].username === request.params.username){
      results.user.push({ username: Users[key].username });
      return response.json(200, results);
    }
  }

  return response.json(200, 'User does not exist.');
};