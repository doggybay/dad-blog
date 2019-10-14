const knex = require('../db/knex')

exports.getAllPosts = (req, res) => {

  knex('posts').then(posts => res.json(posts))
}

exports.getOnePost = (req, res) => {
  
  knex('posts').where('id', req.params.id).then(post => res.json(post))
}

exports.addOnePost = (req, res) => {
  
  knex('posts').insert(req.body).returning('*').then(newPost => res.json(newPost))
}

exports.updateOnePost = (req, res) => {
  knex('posts').update({
    ...req.body
  }).where('id', req.params.id).returning('*').then(updatedPost => res.json(updatedPost))
}

exports.deleteOnePost = (req, res) => {
  knex('posts').del().where('id', req.params.id).returning('*').then(deletedPost => res.json(deletedPost))
}