let { Sequelize, Model, DataTypes, QueryTypes, sequelizecon } = require("../db/dbconfig");

class DestiantionGallary extends Model { }

DestiantionGallary.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    destination_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   


}, { tableName: "destination_gallary", modelName: "DestiantionGallary", sequelize: sequelizecon })

module.exports = {
    DestiantionGallary
}