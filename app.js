'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'petopia',
    charset: 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

app.set('bookshelf', bookshelf);
app.use(bodyParser());

var server = require('http').createServer(app);

require('./routes')(app);

server.listen(port, function() {
  console.log('Now listening on ', port);
});

module.exports.bookshelf = bookshelf;
