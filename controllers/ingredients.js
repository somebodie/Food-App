var express = require('express');
var router = express.Router({
    mergeParams: true
});
var auth = require('../helpers/auth.js');
var Meal = require('../models/meal.js');
var Ingredient = require('../models/ingredient.js');

router.post('/', auth.authorize, function(req, res){
  var ingredient = new Ingredient(req.body);

  Meal.findById(req.params.mealId)
    .exec(function(err, meal){
      if(err) {console.log(err);}
      meal.ingredients.push(ingredient);
      meal.save();
      res.json(meal);
    })
});

module.exports = router;
