var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var usersController = require('./controllers/users.js');
var mealsController = require('./controllers/meals.js');
var sessionsController = require('./controllers/sessions.js');
var ingredientsController = require('./controllers/ingredients.js');

var app = express();

app.use(express.static('public'))

var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/food_app"
mongoose.connect(mongoURI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(logger('dev'));
// Cookie config courtesy of Colin Hart
app.use(session({
    secret: "derpderpderpcats",
    resave: true,
    maxAge: 60 * 60 * 1000,
    saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/users/:id/meals', mealsController);
app.use('/users/:id/:mealId/ingredients', ingredientsController);
app.use('/sessions', sessionsController);

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Can You Smell What the Rock is Cooking?");
});
