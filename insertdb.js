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
  var sql = "INSERT INTO movie (movie_name, Lead_actor, Lead_actress, Release_year, Director_name) VALUES ('3-idiots', 'Amir khan', 'Karina kapoor', '2009', 'Rajkumar hirani')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
