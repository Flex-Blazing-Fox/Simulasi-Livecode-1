const jwt = require('jsonwebtoken')

const authentification = (req,res, next) => {
    if(!req.headers.access_token){
        res.status(401).json({"message:":"MISSING TOKEN"})
    }

    try{
        let decoded = jwt.verify(req.headers.access_token, process.env.SECRET_KEY)

        if(decoded){
            next()
        }else{
            throw "error reques"
        }

    }
    catch(err){
        res.status(401).json({"{message":"INVALID ACCESS TOKEN"})
    }
}

module.exports = authentification