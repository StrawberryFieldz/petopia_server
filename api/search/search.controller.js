var User = require('../../db/tables/db_users.js');
var UserModel = require('../../db/tables/db_users.js').User;

'use strict';

exports.index = function(request, response) {
  UserModel.find({}, 
    'username location', 
    function(err, data){
      if(err){
        console.log("no sitters found in database", err)
        response.send(404);
      }
      if(data){
        return response.json(200, data);
      }

    });
};

exports.byLocation = function(request, response) {
  var location = request.params.location;
  UserModel.find({ location: location, isSitter:true }, 
    'username name location zip photo cost rating bio dogs cats rating', 
    function(err, data){
      if(err){
        console.log("no sitters found in database", err)
        response.send(404);
      }
      if(data){
        return response.json(200, data);
        console.log("Sitters found in the database:", data);
      }

    });
};

exports.byCost = function(request, response) {
  return response.json(200, "Nothing to see here.");
};

exports.byRating = function(request, response) {
  return response.json(200, "Nothing to see here.");
};