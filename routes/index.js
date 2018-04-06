var express = require('express');
var router = express.Router();
const monk = require('monk');
require('dotenv').config()

// var db = require('monk')('localhost/contactApp');
var db = require('monk')(process.env.MONGODB_URI);
var contacts = db.get('contacts');


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
