require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./routers')
const port = 3000;
const cors = require('cors')

app.use(cors)
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, ()=>{
    console.log(`app listen on port ${port}`);
})