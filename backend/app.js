const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const multer = require("multer");

const fileUpload = multer();

const mongouri =
  "mongodb+srv://msproject:msprojects5@cluster0.crroi.mongodb.net/?retryWrites=true&w=majority";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./mongomodels/user");
require("./mongomodels/admin");

app.use(require("./routes/authen.js"));

mongoose.connect(mongouri);
mongoose.connection.on("connected", () => {
  console.log("we are connected to db");
});

app.get("/", (req, res) => {
  res.send("Helooo broooooo");
});

app.post("/upload", fileUpload.single("file"), (req, res, next) => {
  let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  async function upload(req) {
    let result = await streamUpload(req);
    console.log(result);
  }

  upload(req);
});

app.listen(5000, (req, res) => {
  console.log("Server is running at 5000");
});
