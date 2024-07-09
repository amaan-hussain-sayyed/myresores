let { sequelize, Model, DataTypes } = require("../init/dbconfig")
class User extends Model { }
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    USERNAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PASSWORD: {
        type: DataTypes.STRING,
        allowNull: false
    },
    EMAIL_ID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PHONE_NO: {
        type: DataTypes.INTEGER,
        allowNullL: false
    }
}, { tableName: "user", modelName: "User", sequelize })

module.exports = { User }


