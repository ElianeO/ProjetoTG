const { Router } = require('express')

const UserController = require('./controllers/UserController')

const router = Router()

router.post('/user-create', UserController.createUser)
router.put('/user-update/:id', UserController.updateUser)
router.get('/user-list/', UserController.listUsers)
router.delete('/user-delete/:id', UserController.deleteUser)
router.get('/user-list-one/:id', UserController.listOne)

module.exports = router