var express = require('express');
var router = express.Router();
router.get('/',function (req,res) {
    res.render('macjx');

})
module.exports = router;