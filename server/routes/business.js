const express = require("express");
const router = express.Router();
const Business = require("../controllers/businessController");
const Validate = require("../middlewares/businessVal");
const upload = require("../utilities/multer");

//post new business
router.post(
  "/",
  upload.single("image"),
  Validate.postBusinessVal,
  Business.postBusiness
);

//get all businesses
router.get("/", Business.allBusinesses);

module.exports = router;
