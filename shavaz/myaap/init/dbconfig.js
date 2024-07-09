let { Sequelize, DataTypes, Model } = require("sequelize")


let sqlcon = new Sequelize("mysql://root:@localhost/forejs")

sqlcon.authenticate().then(data => {
    console.log("connect to db")
}).catch(err => {
    console.error('Unable to connect to the database:', err)
})

// sqlcon.sync({ alter: true })

module.exports = {
    sqlcon, DataTypes, Model
}