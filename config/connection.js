// Set up the MySQL connection. Don't you think MySQL sounds like an american saying my squirrel? Fun huh
var mysql = require("mysql");
var connection;

//Cheeky lil if else to get the connection up and running
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    connection = mysql.createConnection({
        port: 3306,
        host: "",
        user: "root",
        password: "P@ssword11",
        database: "burgers_db"
    })
};

// Make that connection, fall in love
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack + "\n\n");
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;