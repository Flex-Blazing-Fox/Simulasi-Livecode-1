const express = require('express')
const router = require('./routers')

const app = express()
const PORT = 3000

app.listen(() => {
  console.log('Listening on port: ' + PORT)
})