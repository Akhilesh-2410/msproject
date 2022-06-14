const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userpostschema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
  },
  requirementType: {
    type: String,
    required: true,
  },
  status:{
            default:"pending",
            type:String,
        },
  data: {
    type: Object,
    required: true,
  },
  document: [
    {
      requirementType: {
        type: String,
      },
      name: {
        type: String,
        required:true
      },
      url: {
        type: String,
        required:true
      },
    },
  ],
});

module.exports = mongoose.model("UserPosts", userpostschema);
