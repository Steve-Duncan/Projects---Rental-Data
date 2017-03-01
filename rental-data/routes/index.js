var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res) {
  res.render('partials/register_form', { title: 'Register' });
  // res.send('This should be the landlord page!');  
});

router.get('/login', function(req, res) {
  res.render('partials/login_form', { title: 'Register' });
  // res.send('This should be the landlord page!');  
});

module.exports = router;
