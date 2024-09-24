const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TasksService {

  constructor() {}
  
  async create(data) {
    const newTask = await models.Task.create(data);
    return newTask;
  }

  async list() {
    const response = await models.Task.findAll();
    return response;
  }

  async find(id) {
    const task = await models.Task.findByPk(id);
    if (!task) {
      throw boom.notFound('Task not found');
    }
    return task;
  }

  async update(id, data) {
    const task = await this.find(id);
    const response = await task.update(data);
    return response;
  }

  async delete(id) {
    const task = await this.find(id);
    await task.destroy();
    return {message: 'Task succesfully removed'};
  }
}

module.exports = TasksService;
