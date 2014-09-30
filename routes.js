'use strict';

module.exports = function(app) {

  app.use('/api/search', require('./api/search'));
  app.use('/api/users', require('./api/users'));

};