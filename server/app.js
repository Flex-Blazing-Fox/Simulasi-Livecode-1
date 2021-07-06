const router = require('express').Router()
const PORT = 3000
const { urlencoded } = require('express')
const express = require('express')
const app = express()

app.use(urlencoded({extended:true}))

app.listen(PORT,()=>{
    console.log('listen to port 3000');
})