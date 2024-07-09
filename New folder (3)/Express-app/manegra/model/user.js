const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING,
                    unique: true,
                    allowNull: false
                },
                Token: {
                    type: DataTypes.STRING

                },
                password: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                designation: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                department: {
                    type: DataTypes.STRING,
                    allowNull: false
                },
                role: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    defaultValue: 'user'
                },
                createdAt: {
                    type: DataTypes.DATE,
                    defaultValue:Date.now
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    defaultValue: Date.now,
                    onUpdate : Date.now
                },

            },
            {
                sequelize,
                modelName: "User",
                tableName: "users",
                timestamps: true
            }
        );
    }

    static associate(models) {
        this.belongsToMany(models.Team, {
            through: 'UserTeams',
            foreignKey: 'userId',
            otherKey: 'teamId'
        });

        this.hasMany(models.Project, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });

        this.hasMany(models.Task, {
            foreignKey: 'userId',
            onDelete: 'CASCADE'
        });
    }

    static async createUser(data) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        data.password = hashedPassword;
        return User.create(data);
    }

    static async getUserByEmail(email) {
        return User.findOne({ where: { email } });
    }

    static async getUserById(id) {
        return User.findByPk(id);
    }

    static async updateUser(id, data) {
        return User.update(data, { where: { id } });
    }

    static async deleteUser(id) {
        return User.destroy({ where: { id } });
    }

    async generateToken() {
        const payload = { id: this.id, email: this.email };
        return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
    }

    async setPassword(password) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        this.password = hashedPassword;
    }

    async comparePassword(password) {
        return bcrypt.compare(password, this.password);
    }


}

module.exports = User;