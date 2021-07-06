require('dotenv').config()
const express = require('express')
const routers = require('./routers')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routers)

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT)
})
