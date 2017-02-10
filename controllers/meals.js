var express = require('express');
var router = express.Router({
    mergeParams: true
});
var auth = require('../helpers/auth.js');
var Meal = require('../models/meal.js');
var User = require('../models/user.js');


router.get('/', function(req, res) {
    res.send('Meals controller working');
});

router.post('/', auth.authorize, function(req, res) {
    User.findById(req.params.id)
        .exec()
        .then(function(user) {
            user.save(function(err) {
                if (err) {
                    console.log(err);
                }

                var meal = new Meal({
                    name: req.body.name,
                    date: req.body.date,
                    _creator: user._id
                });
                meal.save(function(err, meal) {
                    if (err) {
                        console.log(err);
                    }
                    meal.populate('_creator');
                })
                console.log(meal);
                console.log(user);
            });
        })

});

module.exports = router;
