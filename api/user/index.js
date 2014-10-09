'use strict';

var express = require('express');
var controller = require('./user.controller.js');

var router = express.Router();

router.get('/', controller.index);
router.get('/:username', controller.byUsername);
router.post('/:username', controller.registerSitterInfo);


module.exports = router;