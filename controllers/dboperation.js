var config = require("../database/dbconfig");
const sql = require("mssql");
 
async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log(" mathus-error :" + error);
  }
}
 

async function pickingList() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM PickHeaderTestApi");
      return res.recordsets;
    } catch (error) {
      console.log(" mathus-error :" + error);
    }
  }
  

module.exports = {
  getdata: getdata,
  pickingList:pickingList
};
