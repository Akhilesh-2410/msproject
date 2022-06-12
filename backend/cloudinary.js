const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "msprojects5",
  api_key: "543443271257916",
  api_secret: "xrrwFyX5PhsQQUu0K1AOAkxGk4U",
});

module.exports = cloudinary;
