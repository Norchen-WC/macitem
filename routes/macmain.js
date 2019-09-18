var express = require('express');
var router = express.Router();
var db = require('../mysql/db');
router.get('/',function (req,res) {
    db.query('select * from macmainfirst_li',function (row) {
        console.log(row);
        res.render('macmain',{row:row});
    })
})
module.exports = router;