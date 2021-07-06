const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const authorize = require("../middlewares/authorization");
const authenticate = require("../middlewares/authentication");

router.post("/register", (req, res) => {
  const { email, password } = req.body;
  User.create({ email, password })
    .then((result) => res.status(201).json(result))
    .catch((err) => console.log(err));
});
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.dataValues.password)) {
        const payload = {
          id: user.dataValues.id,
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET);
        res.status(200).json({
          id: user.dataValues.id,
          email: user.dataValues.email,
          access_token: access_token,
        });
      }
    })
    .catch((err) => console.log(err));
});
router.get("/photos", [authenticate, authorize], (req, res) => {
  if (req.authorizedPhotos.length > 0) {
    res.status(200).json(req.authorizedPhotos);
  } else {
    res.status(200).json({ message: "no photo" });
  }
});

module.exports = router;
