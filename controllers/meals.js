var express = require('express');
var router = express.Router({
    mergeParams: true
});
var auth = require('../helpers/auth.js');

router.get('/', function(req, res) {
    res.send('Meals controller working');
});

router.post('/', auth.authorize, function(req, res) {
    res.send("post hit");
});

module.exports = router;
