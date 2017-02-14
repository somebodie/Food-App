var express = require('express');
var router = express.Router({
    mergeParams: true
});
var auth = require('../helpers/auth.js');
var Meal = require('../models/meal.js');
var User = require('../models/user.js');

// Meals index route
router.get('/', auth.authorize, function(req, res) {
    Meal.find({_creator: req.params.id})
    .exec(function(err, meals){
      if(err) {console.log(err);}
      res.json(meals);
    })
});
// Create new meal
router.post('/', auth.authorize, function(req, res) {
    User.findById(req.params.id)
        .exec()
        .then(function(user) {
            user.save(function(err) {
                if (err) {console.log(err)}
                var meal = new Meal({
                    name: req.body.name,
                    ingredients: req.body.ingredients,
                    date: req.body.date,
                    _creator: req.params.id
                });
                meal.save();
                res.json(meal);
            });
        });
});
// Update meal route
router.put('/:mealId', auth.authorize, function(req, res){
  Meal.findById(req.params.mealId)
  .exec()
  .then(function(meal){
    console.log(req.body);
    meal.name = req.body.name;
    meal.date = req.body.date;

    meal.save();
    res.json(meal);
  })
  .catch(function(err){
    res.json(err);
  })
})
// Meals show route
router.get('/:mealId', auth.authorize, function(req, res){
  Meal.findById(req.params.mealId)
  .exec(function(err, meal){
    if(err){res.send(err);}
    res.json(meal);
  })
})
// Delete meal
router.delete('/:mealId', auth.authorize, function(req, res){
  Meal.findByIdAndRemove(req.params.mealId, function(err){
    if(err) {res.send(err);}
    res.json({status: 200, data: "success"});
  })
})

module.exports = router;
