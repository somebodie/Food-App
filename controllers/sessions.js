var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send('Sessions controller working');
});


module.exports = router;
