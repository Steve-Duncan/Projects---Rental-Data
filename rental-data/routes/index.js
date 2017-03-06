var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/renters', function(req, res) {
  res.render('renters', { title: 'Renters' });
});

module.exports = router;
