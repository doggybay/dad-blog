const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments')

router.get('/comments', commentsController.getAllComments)
router.get('/comments/:id', commentsController.getOneComment)
router.post('/comments', commentsController.addOneComment)
router.patch('/comments/:id', commentsController.updateOneComment)
router.delete('/comments/:id', commentsController.deleteOneComment)

module.exports = router