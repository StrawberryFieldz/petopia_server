'use strict';

var express = require('express');
var controller = require('./users.controller.js');

var router = express.Router();

// router.get('/', controller.index);
router.get('/:userid', controller.byUserId);
router.get('/:email', controller.findUser);
router.post('/', controller.createUser);


module.exports = router;