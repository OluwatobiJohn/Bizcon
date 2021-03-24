const mySQL = require("mysql");
require("dotenv/config");

let connect = mySQL.createConnection({
  host: "db4free.net",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "bizcon"
});

module.exports = connect;
