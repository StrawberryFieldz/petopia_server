var mysql = require('mysql');
var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petopia'
});

dbConnection.connect();

var executeQuery = function(query, param, cb){
  if (!cb) {
    cb = param;
    dbConnection.query(query, function(err, results){
      cb(err, results);
    });
  } else {
    dbConnection.query(query, param, function(err, results){
      console.log("query: ",query);
      console.log("param: ",param);
      console.log("results: ",results);
      
      cb(err, results);
    });
  }
};

module.exports = {};
module.exports.executeQuery = executeQuery;
module.exports.dbConnection = dbConnection;
