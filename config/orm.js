// Import MySQL connection, include her. 
const connection = require("./connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        // check to skip hidden properties
        arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}


// Object for all our SQL statement functions. I know he's a big boy but it's OK, we'll break it down. 
//3 main functions: selectAll, insertOne, updateOne
let orm = {
    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        // Perform the database query
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        // Construct the query string that updates a single entry in the target table
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        // Perform the database query
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            cb(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm;