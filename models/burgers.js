// Bring in our orm
let orm = require("../config/orm.js");

//create the code that will call the ORM functions using burger specific input for the ORM.
let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

//Export at the end of the `burger.js` file. And thats exactly what I did. Wow. 
module.exports = burger;