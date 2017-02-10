var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var auth = require('../helpers/auth.js')
var User = require('../models/user.js');

router.post('/', function(req, res){
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password_digest: req.body.hashedPassword
  });
  console.log(user);
});


module.exports = router;
