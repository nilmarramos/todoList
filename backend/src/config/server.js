const port = 3003

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, function() {
	console.log(`BACKEND is running on port ${port}`)
})

module.exports = app