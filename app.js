'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser());

var server = require('http').createServer(app);

require('./routes')(app);

server.listen(port, function() {
  console.log('Now listening on ', port);
});
