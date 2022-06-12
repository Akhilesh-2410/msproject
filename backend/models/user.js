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
  instituteName: {
    type: String,
    required: true,
  },
  boardOfEducation: {
    type: String,
    required: true,
  },
  typeOfInstitute: {
    type: String,
    requird: true,
  },
  currentGrade: {
    type: String,
    required: true,
  },
  percent_10th: {
    type: String,
    required: true,
  },
  percent_12th: {
    type: String,
    required: true,
  },
  courseTaken: {
    type: String,
    requird: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  applied_for_assitance: {
    type: String,
    required: true,
  },
  financical_assitance_being_received: {
    type: String,
    required: true,
  },
  timePeriod: {
    type: String,
    requird: true,
  },
  amountReceived: {
    type: String,
    required: true,
  },
  isRenewed: {
    type: String,
    required: true,
  },
  applied_for_assitance: {
    type: String,
    required: true,
  },
  timePeriod: {
    type: String,
    requird: true,
  },
});
module.exports = mongoose.model("User", userschema);
