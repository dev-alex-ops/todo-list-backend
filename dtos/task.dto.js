const Joi = require('joi');

const id = Joi.number();
const userId = Joi.number();
const title = Joi.string().regex(/^[a-zA-Z-]*(\s*[a-zA-Z-])+$/).min(3).max(50);
const description = Joi.string().regex(/^[a-zA-Z-]*(\s*[a-zA-Z-])+$/).min(3).max(128);
const isCompleted = Joi.boolean();

const createTaskDto = Joi.object({
  userId: userId.required(),
  title: title.required(),
  description: description.required()
});

const updateTaskDto = Joi.object({
  title: title,
  description: description,
  isCompleted: isCompleted
});

const getTaskDto = Joi.object({
  id: id.required()
});

const deleteTaskDto = Joi.object({
  id: id.required()
});

module.exports = { createTaskDto, updateTaskDto, getTaskDto, deleteTaskDto };
