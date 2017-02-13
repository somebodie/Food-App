var express = require('express');
var router = express.Router({
    mergeParams: true
});
var auth = require('../helpers/auth.js');
var Meal = require('../models/meal.js');
var Ingredient = require('../models/ingredient.js');
// Add ingredient route
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
// Update ingredient
router.put('/:ingredientId', auth.authorize, function(req, res){
  Meal.findById(req.params.mealId)
  .exec(function(err, meal){
    if(err) {console.log(err);}
    var ingredient = meal.ingredients.id(req.params.ingredientId);
    ingredient.name = req.body.name;
    ingredient.qty = req.body.qty;
    meal.save();
    res.json(meal);
  })
});
// Delete ingredient
router.delete('/:ingredientId', auth.authorize, function(req, res){
  Meal.findById(req.params.mealId)
  .exec(function(err, meal){
    if(err) {console.log(err);}
    meal.ingredients.id(req.params.ingredientId).remove();
    meal.save();
    res.json({status:200, data:'success'});
  })
})
module.exports = router;
