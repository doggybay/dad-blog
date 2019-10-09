const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8000
const knex = require('./db/knex')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('Api works....')
})



app.listen(port, `Listening on port ${port}`)