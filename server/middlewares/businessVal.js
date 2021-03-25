const { body, check } = require("express-validator");

const postBusinessVal = [
  body("name", "Business name is required").notEmpty(),
  body("name")
    .isLength({ min: 3, max: 50 })
    .withMessage("Business name must be between 3-50 characters"),
  body("about", "About Business is required").notEmpty(),
  body("about")
    .isLength({ min: 5, max: 250 })
    .withMessage("About Business must be between 5-250 characters"),
  body("category", "Business category is required").notEmpty(),
  body("category")
    .isLength({ min: 2, max: 50 })
    .withMessage("Business name must be between 2-50 characters"),
  body("location", "Business location is required").notEmpty(),
  body("location")
    .isLength({ min: 3, max: 50 })
    .withMessage("Business Location must be between 3-50 characters"),
  body("telephone", "Business phone number is required").notEmpty(),
  body("telephone")
    .isMobilePhone()
    .withMessage("Number must be a valid phone number")
];

module.exports = { postBusinessVal };
