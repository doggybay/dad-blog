const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8000
const knex = require('./db/knex')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Api works....')
})

app.get('/api/users', (req, res) => {
  knex.raw('SELECT * FROM users').then(function (users) {
    res.json(users.rows)
  })
})


app.listen(port, () => console.log(`Listening on port ${port}`))