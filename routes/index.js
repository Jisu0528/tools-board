var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index_controller');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', test: '20101309 한지수' });
// });
router.get('/', indexController.getIndex);
module.exports = router;
