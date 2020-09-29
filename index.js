require('dotenv').config()

const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const { name, version } = require('./package')

const { env: { PORT } } = process

const app = express()
app.use(cors())
app.use('/api', routes)
app.use(express.json())

app.listen(PORT, () => console.log(`${name} ${version} up and running on port ${PORT}`))