var express = require('express');
var router = express.Router();
require('dotenv').config()
/* GET home page. */
router.get('/contact/', function(req, res, next) {
    console.log(req.body)
  res.json({data:req.body});
});

module.exports = router;
