'use strict';
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate(user) {
        const salt = bcrypt.genSaltSync(10)
        user.password = bcrypt.hashSync(user.password, salt)
      }
    },
    modelName: 'User',
  });
  return User;
};