const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const description = Joi.string().alphanum().min(3).max(25);
const status = Joi.string().alphanum().min(3).max(10);

const createTaskDto = Joi.object({
  name: name.required(),
  description: description.required()
});

const updateTaskDto = Joi.object({
  name: name,
  description: description,
  status: status
});

const getTaskDto = Joi.object({
  id: id.required()
});

const deleteTaskDto = Joi.object({
  id: id.required()
});

module.exports = { createTaskDto, updateTaskDto, getTaskDto, deleteTaskDto };
