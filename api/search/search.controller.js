'use strict';

var Search = require('../../config/seed.js').search;

exports.index = function(request, response) {
  return response.json(200, Search);
};

exports.byLocation = function(request, response) {
  var results = [];
  var location = request.params.location.toLowerCase();
  for(var key in Search) {
    if(Search[key].location.toLowerCase() === location) {
      results.push(Search[key]);
    }
  }
  return response.json(200, results);
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