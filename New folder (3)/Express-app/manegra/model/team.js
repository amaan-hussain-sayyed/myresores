const { Sequelize, DataTypes } = require('sequelize');

class Team extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // other fields as needed
        }, {
            sequelize,
            modelName: 'Team',
            tableName: 'teams',
            timestamps: true
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, {
            through: 'UserTeams',
            foreignKey: 'teamId',
            otherKey: 'userId'
        });

        this.hasMany(models.Project, {
            foreignKey: 'teamId',
            onDelete: 'CASCADE'
        });

        this.hasMany(models.ProjectFlow, {
            foreignKey: 'teamId',
            onDelete: 'CASCADE'
        });
    }
}




module.exports = UserTeams;


module.exports = Team;
