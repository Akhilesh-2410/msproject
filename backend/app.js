const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("./cloudinary");
const upload = require("./multer");

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

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    console.log(req);
    console.log(result)
    res.status(200).send({
      name: req.file.originalname,
      url: result.secure_url,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, (req, res) => {
  console.log("Server is running at 5000");
});
