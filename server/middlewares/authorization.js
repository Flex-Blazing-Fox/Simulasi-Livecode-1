const { Photo } = require("../models");

const authorize = (req, res, next) => {
  Photo.findAll({
    where: {
      user_id: req.userId,
    },
  })
    .then((results) => {
      req.authorizedPhotos = results;
      next();
    })
    .catch((err) => console.log(error));
};

module.exports = authorize;
