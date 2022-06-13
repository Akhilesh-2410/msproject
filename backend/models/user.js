const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userschema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    requird: true,
  },
  phone: {
    type: String,
    required: true,
  },
  AadharNumber: {
    type: String,
    required: true,
  },
  parent_name: {
    type: String,
    required: true,
  },
  parent_occupation: {
    type: String,
    required: true,
  },
  parent_phno: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userschema);
