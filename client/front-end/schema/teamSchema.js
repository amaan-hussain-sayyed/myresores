let { Sequelize, Model, DataTypes, Op, QueryTypes, sequelizecon } = require("../db/dbconfig");

class Team extends Model { }
Team.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    destination_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    banner_image:{type:
        DataTypes.STRING,
        allowNull:false
    },
    image_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:4,
            max:155
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:10,
            max:500
        }
    },
    instagram: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:100
        }
    },
    twitter: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:100
        }
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:100
        }
    },
    linkedIn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:100
        }
    },
    gmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:10,
            max:100
        }
    },
    telephone_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:10,
        }
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
}, { tableName: "team", modelName: "Team", sequelize: sequelizecon })


module.exports = {
    Team
}