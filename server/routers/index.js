const { User, Photo } = require('../models')
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
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(400).json({ err: 'email not found' })
    }

    const isCorrect = bcrypt.compareSync(password, user.password)

    if (!isCorrect) {
      return res.status(400).json({ err: 'password is wrong' })
    }

    const payload = {
      id: user.id,
      email: user.email,
    }

    const accessToken = jwt.sign(payload, TOKEN_SECRET)

    return res
      .status(200)
      .json({ id: payload.id, email: payload.email, access_token: accessToken })
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/photos', authentication, async (req, res) => {
  try {
    const userId = req.user.id
    const photos = await Photo.findAll({ where: { userId } })

    res.status(200).json({ photos })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
