var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('map');
});

router.get('/:id', function(req, res, next){
  res.send('todo')

});



module.exports = router;
