const express = require('express');
const UsersService = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createUserDto, updateUserDto, getUserDto, deleteUserDto} = require('../dtos/user.dto');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res) => {
  const getUsers = await service.find();
  res.json(getUsers);
});

router.get('/:id', validatorHandler(getUserDto, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const findUser = await service.findOne(id);
    res.json(findUser);
  } catch (error) {
    next(error);
  }

})

router.post('/', validatorHandler(createUserDto, 'body'), async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
})

router.put('/:id', validatorHandler(updateUserDto, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedUser = await service.update(id, body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
})

router.patch('/:id', validatorHandler(updateUserDto, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedUser = await service.update(id, body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', validatorHandler(deleteUserDto, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await service.delete(id);
    res.json(deleteUser);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
