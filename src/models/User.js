const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      position: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = User