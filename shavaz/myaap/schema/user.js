const { sqlcon, DataTypes, Model } = require("../init/dbconfig");

class User extends Model { }
User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    isdeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }


}, { tableName: "user", modelName: "User", sequelize: sqlcon })

module.exports = { User }