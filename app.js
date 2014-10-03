'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());

var allowCrossDomain = function(request, response, next){
  response.header('Access-Control-Allow-Origin', '*');

  response.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
};

app.use(allowCrossDomain);

app.use(passport.initialize());
app.use(passport.session());

app.use(session({ secret: 'theBanditIsWatching' }));
require('./auth/local/passport.js')();
require('./routes.js')(app, passport);

mongoose.connect('mongodb://localhost/petopia-db');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('db connected.');
});

var server = require('http').createServer(app);

server.listen(port, function() {
  console.log('Now listening on ', port);
});
