const knex = require('../db/knex')

exports.getAllComments = (req, res) => {

  knex('comments').then(comments => res.json(comments))
}

exports.getOneComment = (req, res) => {

  knex('comments').where('id', req.params.id).then(comment => res.json(comment))
}

exports.addOneComment = (req, res) => {

  knex('comments').insert(req.body).returning('*').then(newComment => res.json(newComment))
}

exports.updateOneComment = (req, res) => {
  knex('comments').update({
    ...req.body
  }).where('id', req.params.id).returning('*').then(updatedComment => res.json(updatedComment))
}

exports.deleteOneComment = (req, res) => {
  knex('comments').del().where('id', req.params.id).returning('*').then(deletedComment => res.json(deletedComment))
}