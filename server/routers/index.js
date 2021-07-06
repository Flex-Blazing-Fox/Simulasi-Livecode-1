const router = require('express').Router();
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const authentification = require('../middleware/auth');

router.use('/register', (req,res, next) => {
    const { email, password } = req.body
    User.create({email,password})
    .then(()=>{
        res.status(201).json("Successfull register")
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.use('/login', (req, res, next) => {
    const { email, password} = req.body
    User.findOne({
        where:{email:email}
    })
    .then(result => {
        if(result){
            let match = bcrypt.compareSync(password, result.password)

            if(match){
                const payload = {
                    id : result.id,
                    email: result.email
                }

                let access_token = jwt.sign(payload,process.env.SECRET_KEY)
                res.status(200).json({"access_token":access_token})
            }
        }
        
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.use('/photos', authentification, (req,res, next) => {
    console.log("cek");
})

module.exports = router