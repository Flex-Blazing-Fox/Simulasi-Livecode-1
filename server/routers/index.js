const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

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
        res.status(200).json({ access_token: access_token });
      }
    })
    .catch((err) => console.log(err));
});
router.get("/photos", (req, res) => {});

module.exports = router;
