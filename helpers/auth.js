var User = require('../models/user.js');
var bcrypt = require('bcrypt');

function createSecure(req, res, next){
  res.hashedPassword = bcrypt.hasSync(req.body.password, bcrypt.genSaltSync(10));
  next();
}
