// Require packages
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
// Require files
var Meal = require('../models/meal');
var User = require('../models/user');
var Ingredient = require('../models/ingredient');

  var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/food_app"
  mongoose.connect(mongoURI);

  // Remove existing data (Removed for deployment)
  Meal.remove({}, function(err){
    console.log(err);
  });

  User.remove({}, function(err){
    console.log(err);
  });

  Ingredient.remove({}, function(err){
    console.log(err);
  });
  // Example user
  var user1 = new User({
    created_at: new Date(),
    updated_at: new Date(),
    email: "b@b.com",
    name: "b",
    password_digest: "$2a$10$Ox.W4boPZdS2k8Wq/ScOX.r3wmZH9NeMf6EELMIMjl0EezQp3WHQe"
  });

  user1.save(function(err){
    if(err) {console.log(err);}
    console.log("User created!");
  });

  var ingredient1 = new Ingredient({
    name: "onion",
    qty: "2 cups"
  })

  var ingredient2 = new Ingredient({
    name: "garlic",
    qty: "2 cloves"
  })

  var sunday = new Date(2017, 2, 12);
  var monday = new Date(2017, 2, 13);
  var tuesday = new Date(2017, 2, 14);

  var meal1 = new Meal({
    created_at: new Date(),
    updated_at: new Date(),
    name: "Delicious food",
    ingredients: [ingredient1, ingredient2],
    date: sunday,
    _creator: user1._id
  });

  meal1.save(function(err){
    if(err){console.log(err);}
    console.log("Meal 1 created!");
  })

  var meal2 = new Meal({
    created_at: new Date(),
    updated_at: new Date(),
    name: "Awesome food",
    ingredients: [ingredient1, ingredient2],
    date: sunday,
    _creator: user1._id
  });

  meal2.save(function(err){
    if(err){console.log(err);}
    console.log("Meal 2 created!");
  })

  var meal3 = new Meal({
    created_at: new Date(),
    updated_at: new Date(),
    name: "Terrific food",
    ingredients: [ingredient1, ingredient2],
    date: sunday,
    _creator: user1._id
  });

  meal3.save(function(err){
    if(err){console.log(err);}
    console.log("Meal 3 created!");
  })
