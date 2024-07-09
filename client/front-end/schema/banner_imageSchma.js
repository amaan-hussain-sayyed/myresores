let { Sequelize, Model, DataTypes, QueryTypes, sequelizecon, Op } = require("../db/dbconfig")

class Banner_image extends Model{}
Banner_image.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    created_by:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

},{tableName:"banner_image",modelName:"banner_image",sequelize:sequelizecon})

module.exports={
  Banner_image,
  Op,
  QueryTypes,
  sequelizecon
}