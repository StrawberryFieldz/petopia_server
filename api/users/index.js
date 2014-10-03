'use strict';

var express = require('express');
var controller = require('./users.controller.js');
var appjs = require('../../app.js').passport;
var passport = require('../../auth/local/passport.js')(appjs);

var router = express.Router();

// router.get('/', controller.index);
// router.get('/:userid', controller.byUserId);
// router.get('/:email', controller.findUser);
router.post('/signup', controller.createUser);
// router.post('/login', passport.authenticate('local-login'));

module.exports = router;