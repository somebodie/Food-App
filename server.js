var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');


var app = express();

app.use(express.static('public'))

var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/food_app"
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));



app.listen(3000, function(){
  console.log( "Can You Smell What the Rock is Cooking?");
});
