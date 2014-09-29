'use strict';

var express = require('express');
var controller = require('./search.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.get('/:city', controller.byCity);

module.exports = router;