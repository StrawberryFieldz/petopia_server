'use strict';

var express = require('express');
var controller = require('./users.controller.js');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;