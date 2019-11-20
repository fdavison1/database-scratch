require('dotenv').config()
const express = require('express')
const { SERVER_PORT } = process.env
const massive = require('massive')

const app = express()
app.use(express.json())


app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} may or may not be working`))