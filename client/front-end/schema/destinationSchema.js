let { Sequelize, Model, DataTypes, sequelizecon, QueryTypes, Op } = require("../db/dbconfig")

class Destination extends Model { }
Destination.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    meta_title: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            min:5,
            max:85
        }
    },
    meta_keyword: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            min:8,
            max:255
        }
    },
    meta_description: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            min:10,
            max:500
        }
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:255
        }
    },
    destination_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:5,
            max:255
        }
    },
    region: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:5,
            max:255
        }
    },
    about_the_destination: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            min:10,
            max:1000
        }
    },
    visit_reason: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            min:10,
            max:1000
        }
    },
    destination_guide: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            min:10,
            max:1000
        }
    },
    banner_image: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    destination_video: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate:{
            min:10,
            max:450
        }
    },
    why_choose_us: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            min:10,
            max:900
        }
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, { tableName: "destination", modelName: "Destinaiton", sequelize: sequelizecon })


module.exports = {
    Destination, Op
}