const { User } = require('../models')
const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const TOKEN_SECRET = process.env.TOKEN_SECRET

router.post('/register', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.create({ email, password })
    res.status(201).json({ id: user.id, email: user.email })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
  
    if (!user) {
      res.status(400).json({ err: 'email not found' })
    }
  
    if (!bcrypt.compareSync(password, user.password)) {
      res.status(400).json({ err: 'password is wrong' })
    }
  
    const payload = {
      id: user.id,
      email: user.email
    }
  
    const accessToken = jwt.sign(payload, TOKEN_SECRET)

    res.status(200).json({ id: user.id, email: user.email, access_token: accessToken })
  } catch (err) {
    res.status(500).json(err)
  }

})

router.get('/photos', authentication, (req, res) => {})

module.exports = router
