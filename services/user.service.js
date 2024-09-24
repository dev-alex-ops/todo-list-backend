const faker = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 5;
    for (let i = 0; i < limit; i++) {
      this.users.push({
        id: faker.fakerES.string.uuid(),
        username: faker.fakerES.internet.userName(),
        mail: faker.fakerES.internet.email(),
        password: faker.fakerES.lorem.slug(2),
        firstName: faker.fakerES.person.firstName(),
        lastName: faker.fakerES.person.lastName(),
        birthdate: faker.fakerES.date.anytime(),
      });
    }
  }

  async find() {
    return this.users;
  }

  async findOne(id) {
    const user = this.users.find(item => item.id === id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async create(data) {
    const newUser = {
      id: faker.fakerES.string.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  async update(id, data) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('User not found');
    }
    const user = this.users[index]
    this.users[index] = {
      ...user,
      ...data
    }
    return this.users[index];
  }

  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('User not found');
    }
    this.users.splice(index,1);
    return {message: 'User succesfully removed from database'};
  }
}

module.exports = UsersService;
