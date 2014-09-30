'use strict';

var Users = require('../../config/seed.js');

exports.index = function(request, response) {
  return response.json(200, Users);
};