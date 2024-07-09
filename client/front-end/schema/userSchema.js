let { Sequelize, Model, DataTypes, QueryTypes, sequelizecon } = require("../db/dbconfig")

class USER extends Model { }
USER.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:10,
            max:50
        }
    },
    phone_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:10,
            max:14
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:12
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            min:5,
            max:20
        }

    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }

}, { tableName: "user", modelName: "USER", sequelize: sequelizecon })

module.exports = { USER }
