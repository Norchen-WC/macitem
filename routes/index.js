var express = require('express');
var router = express.Router();
var db = require('../mysql/db');

/* GET home page. */
router.get('/', function(req,res) {
  var user = req.query.user;
  var pass = req.query.pass;
  db.query('insert into user_table values("'+user+'","'+pass+'")',function(row){
      console.log(row);
});
  res.render('index', { title: 'Express' })
});
module.exports = router;
