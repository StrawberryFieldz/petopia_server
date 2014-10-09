var User = require('../../db/tables/db_users.js');
var UserModel = require('../../db/tables/db_users.js').User;

'use strict';

var Search = require('../../config/seed.js').search;

exports.index = function(request, response) {
  return response.json(200, Search);
};

exports.byLocation = function(request, response) {
  var results = [];
  var location = request.params.location;
  UserModel.find({ location: location }, 
    'username location zip photo cost rating bio dogs cats rating', 
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
  var results = {};
  var resultsKey = request.params.cost;
  results[resultsKey] = [];
  for(var key in Search) {
    var costToString = Search[key].cost.toString();
    if(costToString === request.params.cost) {
      results[resultsKey].push(Search[key]);
    }
  }
  return response.json(200, results);
};

exports.byRating = function(request, response) {
  var results = {};
  var resultsKey = request.params.rating;
  results[resultsKey] = [];
  for(var key in Search) {
    var ratingToString = Search[key].rating.toString();
    if(ratingToString === request.params.rating) {
      results[resultsKey].push(Search[key]);
    }
  }
  return response.json(200, results);
};