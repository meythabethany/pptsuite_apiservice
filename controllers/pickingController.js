var config = require("../database/dbconfig");
const sql = require("mssql");

async function pickingList() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT  *  FROM PickHeaderTestApi");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }


  module.exports = {
    pickingList:pickingList
  };