var mysql = require('mysql');
// expired 
// var pool = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'sql3.freemysqlhosting.net',
//   user            : 'sql3373478',
//   password        : '3c6TePrUS4',
//   database        : 'sql3373478'
// });


// new 
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'remotemysql.com',
  user            : 'q5ugp0kzgW',
  password        : 'RPUjxWKC9v',
  database        : 'q5ugp0kzgW'
});

module.exports.pool = pool;