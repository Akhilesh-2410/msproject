const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const adminschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    requird: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Admin", adminschema);
