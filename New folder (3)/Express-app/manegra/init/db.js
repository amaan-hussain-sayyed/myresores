const { Sequelize } = require("sequelize");
const User = require("./models/User");
const Project = require("./models/Project");
const Team = require("./models/Team");
const ProjectFlow = require("./models/ProjectFlow");
const Task = require("./models/Task");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
});

// Initialize models
User.init(sequelize);
Project.init(sequelize);
Team.init(sequelize);
ProjectFlow.init(sequelize);
Task.init(sequelize);

// Define relationships
User.associate(sequelize.models);
Project.associate(sequelize.models);
Team.associate(sequelize.models);
ProjectFlow.associate(sequelize.models);
Task.associate(sequelize.models);

// Sync database
sequelize.sync({ alter: true }).then(() => {
    console.log("Database synced successfully");
}).catch(err => {
    console.error("Error syncing database:", err);
});

module.exports = {
    User,
    Project,
    Team,
    ProjectFlow,
    Task
};
