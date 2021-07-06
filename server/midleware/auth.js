const jwt = require('jsonwebtoken')
const { User } = require('../models')

const authentication = (req, res, next) => {
    const {email, password} = req.body

}

module.exports = authentication