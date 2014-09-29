'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var test = require('./config/seed.js')

var server = require('http').createServer(app);

app.get('/stubData', function(request, response) {
  response.send(test);
});

server.listen(port, function() {
  console.log('Now listening on ', port);
});