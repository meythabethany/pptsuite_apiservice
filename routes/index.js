const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../controllers/dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

module.exports = router;
