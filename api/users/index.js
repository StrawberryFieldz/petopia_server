'use strict';

var express = require('express');
var controller = require('./users.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.get('/:username', controller.byUsername);

module.exports = router;