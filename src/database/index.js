const Sequelize = require('sequelize');
const configDB = require('../config/database');

const User = require('../models/User')
const PessoaJuridica = require('../models/pessoasjuridicas')
const connection = new Sequelize(configDB)

User.init(connection)
PessoaJuridica.init(connection)


module.exports = connection