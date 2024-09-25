const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UsersService {

  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async list() {
    const response = await models.User.findAll();
    return response;
  }

  async find(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, data) {
    const user = await this.find(id);
    const response = await user.update(data);
    return response;
  }

  async delete(id) {
    const user = await this.find(id);
    await user.destroy();
    return {message: 'User succesfully removed from database'};
  }
}

module.exports = UsersService;
