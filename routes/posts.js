const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts')

router.get('/posts', postsController.getAllPosts)
router.get('/posts/:id', postsController.getOnePost)
router.post('/posts', postsController.addOnePost)
router.patch('/posts/:id', postsController.updateOnePost)
router.delete('/posts/:id', postsController.deleteOnePost)

module.exports = router