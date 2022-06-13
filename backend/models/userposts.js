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
  data: {
    type: Object,
    required: true,
  },
  document: [
    {
      userid: {
        type: String,
        required: true,
      },
      requirementType: {
        type: String,
        required: true,
      },
      status: {
        default: "Pending",
        type: String,
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
          },
          url: {
            type: String,
          },
        },
      ],
    },
  ],
});
module.exports = mongoose.model("UserPosts", userpostschema);
