const { Model, DataTypes } = require('sequelize')

class ClientesPJ extends Model {
    static init(sequelize){
        super.init({
            razao_social: DataTypes.STRING,
            nome_fantasia: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            atividade: DataTypes.STRING,
            endereco: DataTypes.STRING,
            data_abertura: DataTypes.DATE,
        }, {
            sequelize,
        })
    }
}
module.exports = ClientesPJ