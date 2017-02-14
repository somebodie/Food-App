var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var auth = require('../helpers/auth.js')
var User = require('../models/user.js');

router.get('/', function(req,res){
  User.find({})
    .exec(function(err,users){
      if(err) {console.log("user not found"); }
      res.json({
        users: users,
        currentUser: req.session.currentUser
      })
    });
})
router.get('/:id', auth.authorize, function(req,res){
  User.findById(req.params.id)
  .exec(function(err, user){
    if(err) console.log(err);
    console.log(user);
    res.json({ user });
  });
})

router.post('/', auth.createSecure, function(req, res){
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password_digest: res.hashedPassword
  });
  user.save(function(err, user){
    if(err) {
      res.json({status: 500, error: err});
    }
    res.json({status: 201,message: "created"})
  });

});


module.exports = router;
