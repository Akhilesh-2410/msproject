const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_Secret = "edwhfkwoddjfoiwdjfoijwdofijww";
const requirelogin = require("./middleware.js");
const admin = mongoose.model("Admin");
const userpost = mongoose.model("UserPosts");
const Vonage = require("@vonage/server-sdk");
//JrFluWD89l_yp9NL5ROQB3tBc554-d_pPLllDnY0-twilio
const vonage = new Vonage({
  apiKey: "73cff7e5",
  apiSecret: "Ph9VNPGCIV112JKI",
});

router.post("/approval", requirelogin, (req, res) => {
  userpost
    .findOneAndUpdate(
      { uid: req.body.uid },
      {
        $set: { status: req.body.status },
      },
      { new: true }
    )
    .exec((err, result) => {
      if (err) return res.status(422).json({ error: err });
      else res.json(result);
    });
  const from = "St.JUDES";
  const to = req.body.phno;
  const text = `Your status for Request for Aid has been ${req.body.status}.\nPlease contact admin for further details.\nThank you have a nice day";`;
  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });
});

router.get("/protected", requirelogin, (req, res) => {
  res.send("HELLO boiiii");
});

router.post("/admin-signin", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.json({ error: "Please enter the fields" });
  admin.findOne({ name: username }).then((saveduser) => {
    if (!saveduser)
      return res.status(422).json({ error: "Only admins allowed" });
    bcryptjs
      .compare(password, saveduser.password)
      .then((doMatch) => {
        if (doMatch) {
          const { _id, name, email, phone, password } = saveduser;
          const token = jwt.sign({ _id: saveduser._id }, JWT_Secret);
          res.json({ token, user: { _id, email, name, phone, password } });
        } else return res.status(422).json({ error: "Invalid name/password" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/admin-signup", (req, res) => {
  const { name, email, password, phone } = req.body;
  if (!email || !password || !name || !phone)
    return res.status(422).json({ error: "You have to give information" });
  admin
    .findOne({ name: name })
    .then((saveduser) => {
      if (saveduser) {
        return res.status(200).json({ error: "admin already exists" });
      }
      bcryptjs.hash(password, 14).then((hashed) => {
        const ad = new admin({
          email,
          password: hashed,
          name,
          phone,
        });
        ad.save()
          .then((ad) => {
            res.json({ message: "saved succesfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/signup", (req, res) => {
  const a = req.body;
  console.log(a.uid);
  if (!a)
    return res.status(422).json({ error: "You have to give information" });
  User.findOne({ uid: a.uid })
    .then((saveduser) => {
      if (saveduser) {
        return res.status(409).json({ error: "User already exists" });
      }
      bcryptjs.hash(a.dob, 14).then((hashed) => {
        a.dob = hashed;
        const user = new User(a);
        user
          .save()
          .then((user) => {
            res.json({ message: "saved succesfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { uid, dob } = req.body;
  if (!uid || !dob)
    return res.status(422).json({ error: "please add uid/dob" });
  User.findOne({ uid: uid }).then((saveduser) => {
    if (!saveduser)
      return res.status(422).json({ error: "please signup before signing in" });
    bcryptjs
      .compare(dob, saveduser.dob)
      .then((doMatch) => {
        if (doMatch) {
          const a = saveduser;
          const token = jwt.sign({ _id: a._id }, JWT_Secret);
          res.json({ token, user: a });
        } else return res.status(422).json({ error: "Invalid uid/dob" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/userDetails/:uid", (req, res) => {
  User.findOne({ uid: req.params.uid }).then((saveduser) => {
    if (!saveduser) return res.status(404).json({ error: "UID Not found" });
    res.json(saveduser);
  });
});

router.put("/updateProfile", requirelogin, (req, res) => {
  const a = req.body;
  bcryptjs.hash(dob, 14).then((hashed) => {
    User.findByIdAndUpdate(
      a._id,
      {
        $set: a,
      },
      { new: true }
    ).exec((err, result) => {
      if (err) return res.status(422).json({ error: err });
      else res.json(result);
    });
  });
});
module.exports = router;
