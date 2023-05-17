const { Model, DataTypes } = require('sequelize')

class PessoasJuridicas extends Model {
  static init(sequelize) {
    super.init({
    cnpj: DataTypes.STRING,
    razao_social: DataTypes.STRING,
    nome_fantasia: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    endereco: DataTypes.STRING,
    atividade: DataTypes.STRING
  }, {
    sequelize
  })
}
}

module.exports = PessoasJuridicas