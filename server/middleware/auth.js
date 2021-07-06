const jwt = require('jsonwebtoken')

const authentification = (req,res, next) => {
    console.log(req.headers);
}

module.exports = authentification