const express = require("express");
const bodyParser = require("body-parser");
const DB = require("./config/db.config");
require("dotenv/config");

const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Test Connection
DB.connect(err => {
  if (err) throw err;
  console.log("SQL Connected");
});

//Routes
const homeRoute = require("./routes/home");
app.use("/", homeRoute);

app.listen(3005, () => {
  console.log("server is starting on port 3005");
});
