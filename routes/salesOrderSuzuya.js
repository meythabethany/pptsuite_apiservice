const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../controllers/salesorderSuzuyaController");

router.get("sOSuzuya", function (req, res, next) {
    sql.createSOsuzuya().then((result) => {
      res.json(result[0]);
    });
  });
  
  
  module.exports = router;