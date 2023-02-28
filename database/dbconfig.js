	require("dotenv").config();
  const{DB_HOST,DB_USER,DB_PASSWORD,DB_NAME} = process.env

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    server: DB_HOST,
    database: DB_NAME,
    options: {
      trustedconnection: true,
      enableArithAbort: true,
      instancename: "",
    },
    //port: 49693
  };
   
  module.exports = config;
  