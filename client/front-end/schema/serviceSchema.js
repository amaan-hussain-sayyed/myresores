let { Sequelize, Model, DataTypes, QueryTypes, Op, sequelizecon } = require('../db/dbconfig')

class Service extends Model { }
Service.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    banner_image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:4,
            max:255
        }
    },
    meta_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:5,
            max:155
        }
    },
    meta_keyword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:255
        }
    },
    meta_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:10,
            max:255
        }
    },
    service_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:5,
            max:85
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            min:10,
            max:3000
        }
    },
    is_deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    updated_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { tableName: "service", modelName: "Service", sequelize: sequelizecon });

module.exports = {
    Service, Op
}