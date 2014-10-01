var db = require('../db.js');

exports.saveUser = function(user, cb){
  db.executeQuery('INSERT INTO Users(FirstName, LastName, Password, Email) VALUES (?, ?, ?, ?);', [user.firstName, user.lastName, user.password, user.email], cb);
};

exports.checkUser = function(userEmail, cb){
  db.executeQuery('SELECT * FROM Users WHERE Email = ? LIMIT 1;', userEmail, cb);
};
