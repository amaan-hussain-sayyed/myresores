let { Sequelize, Model, DataTypes, QueryTypes, Op } = require("sequelize")

let sequelizecon = new Sequelize("mysql://root:@localhost/libertydb");

// sequelizecon.authenticate().then(
//     (data) => { 
//         console.log("connected");
//         // sequelizecon.sync({ alter: true }); //to generate the db
//     }).catch((err) => { 
//         console.log("not connected") 
//     })

module.exports = { Sequelize, Model, DataTypes, QueryTypes, sequelizecon, Op }