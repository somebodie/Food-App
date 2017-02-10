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
                    date: req.body.date,
                    _creator: user._id
                });
                meal.save();
                res.json(meal);
            });
        });
});
// Update meal route
router.put('/:mealId', function(req, res){
  Meal.findById(req.params.mealId)
  .exec()
  .then(function(meal){
    meal.name = req.body.name;

    meal.save();
    res.json(meal);
  })
  .catch(function(err){
    res.json(err);
  })
})


module.exports = router;
