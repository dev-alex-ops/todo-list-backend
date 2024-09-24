const { Model, DataTypes, Sequelize } = require('sequelize');
const { Task } = require('./task.model');

const USER_TABLE = 'users';

const userSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    birthdate: {
        allowNull: false,
        type: DataTypes.DATEONLY
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'create_at',
        defaultValue: DataTypes.NOW
    }
}

class User extends Model {
    static associate() {
        User.hasMany(Task); 
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, userSchema, User};