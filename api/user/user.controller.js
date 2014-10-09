var User = require('../../db/tables/db_users.js');
var UserModel = require('../../db/tables/db_users.js').User;

'use strict';

exports.index = function(request, response) {
  console.log('index was accessed.')
  return response.json(404, 'Nothing to see here.');
};

exports.byUsername = function(request, response){
  console.log('Requests username: ', request.params.username);
  UserModel.findOne({ username: request.params.username }, 
  function(err, user){
    if(err) console.log('user.controller: User was not found')
    response.json(200, user);
  });
};

exports.registerSitterInfo = function(request, response){
  console.log(request.body);
  UserModel.findOne({ username: request.params.username }, function(err, user){
      if(err){
        console.log("omg err", err)
        response.send(404);
      }
      if(user){
        var userInfo = request.body;
        console.log("About to add userInfo to database:", userInfo);
        user.isSitter = true;
        user.location = userInfo.location;
        user.zip = userInfo.zip;
        user.cost = userInfo.cost;
        user.photo = 'http://www.gurucul.com/wp-content/uploads/2014/02/anonymous-user.png';
        user.rating = userInfo.rating;
        user.bio = userInfo.bio;
        user.dogs = userInfo.dogs
        user.cats = userInfo.cats
        user.save(function(err){
          if(err) console.log("There was an error saving the new user info.")
        });

        response.send(200);
      }else{
        console.log("User not found.")
        response.send(404);
      }
    });


}
