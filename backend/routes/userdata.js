const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requirelogin = require("./middleware.js");
const userpost = mongoose.model("UserPosts");


router.post("/postdoc", requirelogin, (req, res) => {
  const { userid, requirementType, data } = req.body;
  if (!data || !requirementType)
    return res.status(422).json({ error: "please add all of the fields" });
  const post = new userpost({
    userid,
    requirementType,
    data,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/getAllPost", requirelogin, (req, res) => {
  userpost
    .find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/updatedoc", requirelogin, (req, res) => {
  const { requirementType, data } = req.body;
  userpost
    .findByIdAndUpdate(
      req.body._id,
      {
        $set: { requirementType: requirementType, data: data },
      },
      { new: true }
    )
    .exec((err, result) => {
      if (err) return res.status(422).json({ error: err });
      else res.json(result);
    });
});



module.exports = router;
