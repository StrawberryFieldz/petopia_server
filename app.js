'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var server = require('http').createServer(app);

require('./routes')(app);

server.listen(port, function() {
  console.log('Now listening on ', port);
});