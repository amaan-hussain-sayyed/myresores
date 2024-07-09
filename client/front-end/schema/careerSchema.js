let { Sequelize, Model, DataTypes, QueryTypes, sequelizecon, Op } = require("../db/dbconfig");

class Career extends Model{}
Career.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    slug:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    job_location:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    is_deleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
    created_by:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    updated_by:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{tableName:"career",modelName:"Career",sequelize:sequelizecon})


module.exports={
    Career,QueryTypes,sequelizecon,Op
}