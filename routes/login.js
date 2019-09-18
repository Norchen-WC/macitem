var express = require('express');
var router = express.Router();
var db = require('../mysql/db');

router.get('/',function (req,res) {
    res.render('login');
});

router.post('/',function (req,res) {
    var user = req.body.user;
    var pass = req.body.pass;
    db.query('select * from user_table where user = "'+user+'" and pass = "'+pass+'"',function (row) {
        console.log(row);
        if(row.length == 0){
            res.render('login',{err:'登录失败'});
        }
        else{
            /*db.query('insert into user_table values("'+user+'","'+pass+'"))',function(row){
                console.log(row);
            });*/
            res.redirect('/macmain');
        }
    });
});

module.exports = router;

