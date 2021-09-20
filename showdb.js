var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ankit",
  database: "movies"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM movie", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

