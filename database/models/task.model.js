const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../libs/sequelize');
const { User } = require('./user.model');

const TASK_TABLE = 'tasks';

const taskSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    isCompleted: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        field: 'created_at',
        defaultValue: DataTypes.NOW
    },
    updateAt: {
        allowNull: true,
        type: DataTypes.DATEONLY,
        field: 'updated_at'
    },
    completedAt: {
        allowNull: true,
        type: DataTypes.DATEONLY,
        field: 'completed_at'
    }
}

class Task extends Model {
    static associates() {
        Task.hasOne(User);
    }
    
    static config(sequelize) {
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: false
        }
    }
}

module.exports = {TASK_TABLE, taskSchema, Task};