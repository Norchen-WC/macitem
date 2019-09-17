var express = require('express');
var router = express.Router();
var db = require('../mysql/db');

/* GET home page. */
router.get('/', function(req,res) {
    var user = req.query.user;
    var pass = req.query.pass;
    db.query('select * from user_table where user="'+user+'"',function (row) {
        console.log(row);
    if(row.length == 0){
    db.query('insert into user_table values("'+user+'","'+pass+'")',function(row){
        console.log(row);
    });
    res.render('login');
}else {
        res.render('register', {err: '用户已经被注册'});
    }
});
});
module.exports = router;