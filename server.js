const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 8000
const logger = require('morgan')

const users = require('./routes/users')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json('Api works....')
})

app.use('/api', users)

// app.get('/api/users', (req, res) => {
//   usersService.getAllUsers(res)
// })

// app.get('/api/users/:id', (req, res) => {
//   usersService.getOneUser(req, res)
// })


app.listen(port, () => console.log(`Listening on port ${port}`))