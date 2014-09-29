'use strict';

var Search = require('../../config/seed.js');

exports.index = function(request, response) {
  return res.json(200, Search);
};