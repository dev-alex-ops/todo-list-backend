const faker = require('@faker-js/faker');
const boom = require('@hapi/boom');

class TasksService {

  constructor(){
    this.tasks = [];
    this.generate();
  }

  generate(){
    const limit = 5;
    for (let i = 0; i < limit; i++){
      this.tasks.push({
        id: faker.fakerES.string.uuid(),
        name: faker.fakerES.lorem.word(8),
        desription: faker.fakerES.lorem.sentence(6),
        status: 'Pending',
        createdAt: faker.fakerES.date.recent(),
      });
    }
  }

  async find(){
    return this.tasks;
  }

  async findOne(id){
    const task = this.tasks.find(item => item.id === id);
    if (!task) {
      throw boom.notFound('Task not found');
    }
    return task;
  }

  async create(data){
    const newTask = {
      id: faker.fakerES.string.uuid(),
      ...data,
      status: "Pending",
      createdAt: faker.fakerES.date.soon()
    }
    this.tasks.push(newTask);
    return newTask;
  }

  async update(id, data){
    const index = this.tasks.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Task not found');
    }
    const task = this.tasks[index]
    this.tasks[index] = {
      ...task,
      ...data
    }
    return this.tasks[index];
  }

  async delete(id){
    const index = this.tasks.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Task not found');
    }
    this.tasks.splice(index, 1);
    return ({message: 'Task succesfully removed'});
  }
}

module.exports = TasksService;
