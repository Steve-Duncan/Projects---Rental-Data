var mysql = require("mysql");

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'renters'
});
connection.connect();

var customer = {
	first_name: "Gerry",
	last_name: "Mander",
	email: "gmander@stall.gov",
	password: "password"
};

var query = connection.query('insert into customers set ?', customer, function (err, result) {
	console.log(query.sql);
})