let { sequelize, Model, DataTypes } = require("../init/dbconfig")

class Userpermission extends Model { }
Userpermission.init({
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
    }
}, { tableName: "user_permisiion", modelName: "Userpermission", sequelize })

module.exports = { Userpermission }