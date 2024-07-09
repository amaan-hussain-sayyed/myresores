let { Sequelize, Model, DataTypes, sequelizecon, Op, QueryTypes } = require("../db/dbconfig");

class Item extends Model { }
Item.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    service_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:5,
            max:55
        }
    },
    item_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:5,
            max:155
        }
    },
    item_description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            min:10,
            max:15000
        }
    },
    item_image: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, { tableName: "item", modelName: "Item", sequelize: sequelizecon })

module.exports = { Item }