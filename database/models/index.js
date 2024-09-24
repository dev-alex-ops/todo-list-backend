const { User, userSchema } = require('./user.model');
const { Task, taskSchema } = require('./task.model');

function setupModels(sequelize) {
    User.init(userSchema, User.config(sequelize));
    Task.init(taskSchema, Task.config(sequelize));
}

module.exports = setupModels;