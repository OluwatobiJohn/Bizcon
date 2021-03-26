const DB = require("../config/db.config");
const cloudinary = require("../utilities/cloudinary");
const { validationResult } = require("express-validator");

const deleteBusiness = (req, res) => {
  let sql = `DELETE FROM businesses WHERE businessID = ${req.params.id}`;

  try {
    DB.query(sql, (err, result) => {
      if (err) throw err;

      if (result.affectedRows < 1) {
        res.json({ message: "Invalid ID, Business not found" });
      } else {
        res.json({ message: `Business with id ${req.params.id} deleted` });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const specificBusiness = (req, res) => {
  let sql = `SELECT * FROM Businesses WHERE businessID = ${req.params.id}`;

  try {
    DB.query(sql, (err, result) => {
      if (err) throw err;
      if (result[0] == null) {
        res.json({ message: `Book with id ${req.params.id} not found` });
      } else if (result !== []) {
        res.json({
          message: `Business with id ${req.params.id}`,
          business: result
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const postBusiness = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(result);

    //business instance
    const business = {
      name: req.body.name,
      image: result.secure_url,
      about: req.body.about,
      category: req.body.category,
      address: req.body.address,
      location: req.body.location,
      telephone: req.body.telephone
    };

    let sql = "INSERT INTO Businesses SET ?";

    //input validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ Error_message: errors.array() });
    }

    // save business
    DB.query(sql, business, (err, results) => {
      if (err) throw err;
      console.log(results);
      res.json({ message: "New Business", business: business });
    });
  } catch (err) {
    console.log(err);
  }
};

const allBusinesses = (req, res) => {
  let sql = "SELECT * FROM Businesses";
  try {
    DB.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json({ message: "All Businesses", businesses: result });
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  deleteBusiness,
  specificBusiness,
  postBusiness,
  allBusinesses
};
