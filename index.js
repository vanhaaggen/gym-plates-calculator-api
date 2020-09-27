require('dotenv').config()
const PORT = process.env.PORT || 8080
const express = require('express')
const router = express.Router()
const cors = require('cors')
//const bodyParser = require('body-parser')
//const jsonBodyParser = bodyParser.json()
const { name, version } = require('./package')
const calculatePlates = require('./routes/calc-num-plates')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/calcnumplate/:data', calculatePlates)


//app.use('/api', router)
app.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))