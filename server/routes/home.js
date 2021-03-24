const express = require("express");
const router = express.Router();
const DB = require("../config/db.config");

router.get("/", (req, res) => {
  let sql =
    "create table if not exists Business(businessID int auto_increment, name varchar(50), image varchar(250), address varchar(250), location varchar(250), telephone int, date datetime default now(), primary key(businessID))";

  try {
    DB.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("You can now create businesses");
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
