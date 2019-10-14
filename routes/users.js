const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getOneUser)
router.post('/users', usersController.addOneUser)
router.patch('/users/:id', usersController.updateOneUser)
router.delete('/users/:id', usersController.deleteOneUser)

module.exports = router