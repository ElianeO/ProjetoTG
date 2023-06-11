const { Model, DataTypes } = require('sequelize')

class Clientes extends Model {
  static init(sequelize) {
    super.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    endereco: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize
  })
}
}

module.exports = Clientes