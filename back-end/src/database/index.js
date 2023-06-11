const Sequelize = require('sequelize');
const configDB = require('../config/database');

const User = require('../models/User')
const Empresa = require('../models/empresas')
const Clientes = require('../models/clientes')

const connection = new Sequelize(configDB)

User.init(connection)
Empresa.init(connection)
Clientes.init(connection)

module.exports = connection