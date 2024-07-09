
let { Sequelize, Model, DataTypes, QueryTypes, sequelizecon } = require("../db/dbconfig")

class PERMISSION extends Model { }
PERMISSION.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    permission: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { tableName: "permission", modelName: "PERMISSION", sequelize: sequelizecon })

module.exports = { PERMISSION }


