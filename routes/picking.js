const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../controllers/pickingController");

router.get("/pickingList", function (req, res, next) {
    sql.pickingList().then((result) => {
      res.json(result[0]);
    });
  });
  
  
  module.exports = router;