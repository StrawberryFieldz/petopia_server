'use strict';

var express = require('express');
var controller = require('./search.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.get('/location/:location', controller.byLocation);
router.get('/cost/:cost', controller.byCost);
router.get('/rating/:rating', controller.byRating);

module.exports = router;