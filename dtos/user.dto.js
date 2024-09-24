const Joi = require('joi');

const id = Joi.string().uuid();
const username = Joi.string().alphanum().min(3).max(15);
const mail = Joi.string().email();
const password = Joi.string().alphanum().min(8);
const firstName = Joi.string().regex(/^[a-zA-Z-]*(\s*[a-zA-Z-])+$/);
const lastName = Joi.string().regex(/^[a-zA-Z-]*(\s*[a-zA-Z-])+$/);
const birthdate = Joi.date().iso();

const createUserDto = Joi.object({
  username: username.required(),
  mail: mail.required(),
  password: password.required(),
  firstName: firstName.required(),
  lastName: lastName.required(),
  birthdate: birthdate.required(),
});

const updateUserDto = Joi.object({
  username: username,
  mail: mail,
  password: password,
  firstName: firstName,
  lastName: lastName,
  birthdate: birthdate,
});

const getUserDto = Joi.object({
  id: id.required()
});

const deleteUserDto = Joi.object({
  id: id.required()
});

module.exports = { createUserDto, updateUserDto, getUserDto, deleteUserDto };


