const knex = require('../db/knex')


exports.getAllUsers = (req, res) => {
  // return knex.raw('SELECT * FROM users').then(function (users) {
  //   res.json(users.rows)
  // });
  knex('users').then(users => res.json(users))
}

exports.getOneUser = (req, res) => {
  // knex.raw(`SELECT * FROM users WHERE id = ${req.params.id}`).then(function (user) {
  //   res.json(user.rows[0])
  // });
  knex('users').where('id', req.params.id).then(user => res.json(user))
}

exports.addOneUser = (req, res) => {
  // knex.raw(`INSERT INTO users(name,email,website,password,created_at) values('req.body.name','req.body.email','req.body.website','req.body.password','req.body.created_at)`).then(function (user) {
  //   res.json(user.rows)
  // });
  knex('users').insert(req.body).returning('*').then(newUser => res.json(newUser))
}

exports.updateOneUser = (req, res) => {
  knex('users').update({ ...req.body }).where('id', req.params.id).returning('*').then(updatedUser => res.json(updatedUser))

}

exports.deleteOneUser = (req, res) => {
  knex('users').del().where('id', req.params.id).returning('*').then(deletedUser => res.json(deletedUser))
}