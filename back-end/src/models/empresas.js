const { Model, DataTypes } = require('sequelize')

class Empresas extends Model {
  static init(sequelize) {
    super.init({
    cnpj: DataTypes.STRING,
    razao_social: DataTypes.STRING,
    nome_fantasia: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    endereco: DataTypes.STRING,
    porte: DataTypes.STRING,
    atividade: DataTypes.STRING
  }, {
    sequelize
  })
}
}

module.exports = Empresas