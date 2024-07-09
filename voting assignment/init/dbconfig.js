let { Sequelize, Model, DataTypes, QueryTypes } = require("sequelize")
let sequelize = new Sequelize("mysql://root:@localhost/voter")
sequelize.authenticate().then(() => { console.log("connected to db") }).catch((error) => { console.log(error) })

module.exports = { sequelize, Model, DataTypes, QueryTypes }