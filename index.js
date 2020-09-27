require('dotenv').config()

const express = require('express')
const cors = require('cors')

const { name, version } = require('./package')
const calculatePlates = require('./routes/calc-num-plates')

const { env: { PORT } } = process

const app = express()
app.use(cors())
app.use(express.json())

app.get('/calcnumplate/:data', calculatePlates)


//app.use('/api', router)
app.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))