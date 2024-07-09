let { Sequelize, Model, DataTypes, QueryTypes, sequelizecon, Op } = require("../db/dbconfig")

class Blog extends Model { }
Blog.init({
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
            max:155
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
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:225
        }
    },
    blog_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:5,
            max:155
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{
            min:10,
            max:1000
        }
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            min:8,
            max:155
        }
    },
    banner_image: {
        type: DataTypes.STRING,
        allowNull: true
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
    }
}, { tableName: "blog", modelName: "Blog", sequelize: sequelizecon })

module.exports = {
    Blog, Op
}