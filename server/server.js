require('dotenv').config()
const express = require('express')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const massive = require('massive')

const app = express()
app.use(express.json())


massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} may or may not be working`))
})
