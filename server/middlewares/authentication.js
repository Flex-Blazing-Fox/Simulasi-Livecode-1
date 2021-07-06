const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  if (!req.headers.access_token) {
    next({ message: "no token" });
  } else {
    const decodedToken = jwt.verify(
      req.headers.access_token,
      process.env.JWT_SECRET
    );
    req.userId = decodedToken.id;
    next();
  }
};

module.exports = authenticate;
