const { Router } = require('express')

const UserController = require('./controllers/UserController')
const EmpresasController = require('./controllers/EmpresasController')
const ClientesController = require('./controllers/ClientesController')

const router = Router()

router.post('/user-create', UserController.createUser)
router.put('/user-update/:id', UserController.updateUser)
router.get('/user-list/', UserController.listUsers)
router.delete('/user-delete/:id', UserController.deleteUser)
router.get('/user-list-one/:id', UserController.listOne)

router.post('/empresa-create', EmpresasController.createEmpresa)
router.put('/empresa-update/:id', EmpresasController.updateEmpresa)
router.get('/empresas-list', EmpresasController.listEmpresas)
router.get('/empresa-list-one/:id', EmpresasController.listOne)
router.delete('/empresa-delete/:id', EmpresasController.deleteEmpresa)

router.post('/cliente-create/', ClientesController.createClientes)

module.exports = router