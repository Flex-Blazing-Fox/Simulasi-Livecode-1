const router = require('express').Router();
const bcrypt = require('bycrypt');

router.post('/register',(req,res)=>{
    const {email,password} = req.body
    const key = 
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(key, salt)
    
})

module.exports = router