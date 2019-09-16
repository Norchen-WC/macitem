var mysql = require("mysql");
var db = {};
db.query = function (sql,callback) {
    var connect = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '1bk-bjtHyJ#m',
            database: 'mac',
            port: 3306
        }
    );
    connect.connect();
    connect.query(sql,function (err,row,fields) {
        console.log(err);
        callback(row);
    });
    connect.end();
};
module.exports = db;