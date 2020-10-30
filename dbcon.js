var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'sql3.freemysqlhosting.net',
  user            : 'sql3373478',
  password        : '3c6TePrUS4',
  database        : 'sql3373478'
});

module.exports.pool = pool;