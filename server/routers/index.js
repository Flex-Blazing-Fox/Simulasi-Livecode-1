const router = require('express').Router();
const { User } = require('../models')

router.use('/register', (req,res, next) => {
    const { email, password } = req.body
    User.create({email,password})
    .then(()=>{
        res.status(200).json("Successfull register")
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router