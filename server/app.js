const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3005, () => {
  console.log("server is starting on port 3005");
});
