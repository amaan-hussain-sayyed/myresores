let { Sequelize, DataTypes, Model } = require("sequelize");
let config = require('./config.json')["DbConfig"];
let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

sequelize.authenticate(() => {
    console.log("connected to db")
}).catch((err) => {
    console.error(`Error connecting to database: ${err}`);
});


module.exports = { sequelize, DataTypes, Model };