const { sequelize ,DataTypes,Model} = require("../dbconfig");

// models/Todo.js
class Todo extends Model{}

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{tableName:"todo",modelName:"Todo",sequelize})


module.exports = Todo;
