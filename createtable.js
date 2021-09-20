var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ankit",
  database: "movies"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE movie (movie_name VARCHAR(255), Lead_actor VARCHAR(255), Lead_actress VARCHAR(255), Release_year INT(255), Director_name VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
