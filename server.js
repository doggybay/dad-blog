const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8000
const knex = require('./db/knex')

let usersService = require('./users/usersService')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json('Api works....')
})

app.get('/api/users', (req, res) => {
  usersService.getAllUsers(res)
})

app.get('/api/users/:id', (req, res) => {
  usersService.getOneUser(req, res)
})


app.listen(port, () => console.log(`Listening on port ${port}`))