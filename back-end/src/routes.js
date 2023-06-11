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
router.put('/cliente-update/:id', ClientesController.updateCliente)
router.get('/clientes-list', ClientesController.listClientes)
router.get('/cliente-list-one/:id', ClientesController.listOne)
router.delete('/cliente-delete/:id', ClientesController.deleteCliente)

module.exports = router