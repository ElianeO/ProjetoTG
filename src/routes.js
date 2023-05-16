const { Router } = require('express')

const ClientesPJ = require('./controllers/ClientesPJ')

const UserController = require('./controllers/UserController')

const router = Router()

router.post('/user-create', UserController.createUser)
router.put('/user-update/:id', UserController.updateUser)
router.get('/usermu-list/', UserController.listUsers)
router.delete('/user-delete/:id', UserController.deleteUser)
router.get('/list-one/:id', UserController.listOne)

router.post('/clientePJ-create', ClientesPJ.createClientePJ)


module.exports = router