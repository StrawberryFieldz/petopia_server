'use strict';

var Search = require('../../config/seed.js');

exports.index = function(request, response) {
  return response.json(200, Search);
};

exports.byLocation = function(request, response) {
  var results = {};
  console.log(request);
  var resultsKey = request.params.location;
  results[resultsKey] = [];
  for(var key in Search) {
    if(Search[key].location === request.params.location) {
      console.log(Search[key]);
      results[resultsKey].push(Search[key]);
    }
  }
  return response.json(200, results);
};

exports.byCost = function(request, response) {
  var results = {};
  console.log(request);
  var resultsKey = request.params.cost;
  results[resultsKey] = [];
  for(var key in Search) {
    var costToString = Search[key].cost.toString();
    if(costToString === request.params.cost) {
      console.log(Search[key]);
      results[resultsKey].push(Search[key]);
    }
  }
  return response.json(200, results);
};

exports.byRating = function(request, response) {
  var results = {};
  console.log(request);
  var resultsKey = request.params.rating;
  results[resultsKey] = [];
  for(var key in Search) {
    var ratingToString = Search[key].rating.toString();
    if(ratingToString === request.params.rating) {
      console.log(Search[key]);
      results[resultsKey].push(Search[key]);
    }
  }
  return response.json(200, results);
};