const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      console.log(file);
      cb(null, file.originalname);
    }
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("file format not supported"), false);
      return;
    }
    cb(null, true);
  }
});
