const { User } = require('../models')
const jwt = require('jsonwebtoken')

const authentication = async (req, res, next) => {
  const { access_token } = req.headers

  if (!access_token) {
    return res.status(400).json({ err: 'missing access token' })
  }

  try {
    const decoded = jwt.verify(access_token, process.env.TOKEN_SECRET)

    const user = await User.findByPk(decoded.id)

    if (!user) {
      return res.status(404).json({ err: 'user not found' })
    }

    req.user = user

    next()
  } catch (err) {
    res.status(400).json({ err: 'invalid token' })
  }
}

module.exports = authentication
