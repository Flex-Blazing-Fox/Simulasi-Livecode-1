const router = require('express').Router();
const bcrypt = require('bycrypt');
const user = require('../models');

router.post('/register',(req,res)=>{
    const {email,password} = req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)
    user.create({email,hash})
    .then(result=>{
        res.status(201).json({id:result.id,email:result.email})
    })
    .catch(err=>{
        res.status(500).json({error:err})
    })
})

router.post('/login',(req,res)=>{
    const key = process.env.HASH_KEY
    const {email,password} = req.body
    user.findOne({email})
    .then(result=>{
        if (result){
            const compare = bcrypt.compareSync(password, result.email); 
            bcrypt.compareSync(someOtherPlaintextPassword, result.email);
        }
    })
})

module.exports = router