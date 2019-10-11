const knex = require('../db/knex')
let idCounter = 51;

exports.getAllUsers = res => {
  return knex.raw('SELECT * FROM users').then(function (users) {
    res.json(users.rows)
  });
}

exports.getOneUser = (req, res) => {
  knex.raw(`SELECT * FROM users WHERE id = ${req.params.id}`).then(function (user) {
    res.json(user.rows[0])
  });
}

exports.addOneUser = (req, res) => {
  knex.raw(`INSERT INTO users(name,email,website,password,created_at) values('req.body.name','req.body.email','req.body.website','req.body.password','req.body.created_at)`).then(function (user) {
    res.json(user.rows)
  });
}