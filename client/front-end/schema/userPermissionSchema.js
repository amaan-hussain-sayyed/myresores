let { Sequelize, Model, DataTypes, sequelizecon, QueryTypes } = require("../db/dbconfig")

class UserPermission extends Model { }
UserPermission.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    permission_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, { tableName: "user_permission", modelName: "UserPermission", sequelize: sequelizecon })

module.exports = { UserPermission }
