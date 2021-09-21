var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ankit",
  database: "movies"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM movie WHERE Lead_actor = 'Amir khan'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
