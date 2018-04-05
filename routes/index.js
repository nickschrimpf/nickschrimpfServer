var express = require('express');
var router = express.Router();
const monk = require('monk');

// var db = require('monk')('localhost/contactApp');
var db = require('monk')('MONGODB_URI');
var contacts = db.get('contacts');

require('dotenv').config()
/* GET home page. */



router.post('/contact/', function(req, res, next) {
    contacts.insert({
        contact:req.body.contact,
        Date: new Date()
    }).then (function(contacts){ 
    })
    res.sendStatus(200);
});

module.exports = router;
