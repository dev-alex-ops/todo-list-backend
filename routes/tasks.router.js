const express = require('express');
const TasksService = require('../services/task.service');
const validatorHandler = require('../middlewares/validator.handler');
const {createTaskDto, updateTaskDto, getTaskDto, deleteTaskDto} = require('../dtos/task.dto');

const router = express.Router();
const service = new TasksService();


router.get('/', async (req, res) => {
  const getTasks = await service.find();
  res.json(getTasks);
})

router.get('/:id', validatorHandler(getTaskDto, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const findTask = await service.findOne(id);
    res.json(findTask);
  } catch (error) {
    next(error);
  }
})

router.post('/', validatorHandler(createTaskDto, 'params'), async (req, res) => {
    const body = req.body;
    const newTask = await service.create(body);
    res.json({newTask});
})

router.put('/:id', validatorHandler(updateTaskDto, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedTask = await service.update(id, body);
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
})

router.patch('/:id', validatorHandler(updateTaskDto, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const updatedTask = await service.update(id, body);
    res.json(updatedTask);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', validatorHandler(deleteTaskDto, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedTask = await service.delete(id);
    res.json(deletedTask);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
