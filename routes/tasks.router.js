const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();


router.get('/', (req, res) => {
    const tasks = []

    for (let i = 0; i < 50; i++) {
        const id = i+1
        const name = faker.fakerES.lorem.sentence(10);
        const description = faker.fakerES.lorem.paragraph(3);
        const status = 'pending';
        const createdAt = faker.fakerES.date.anytime();
        tasks.push({
            id,
            name,
            description,
            status,
            createdAt
        })
    }

    res.json(tasks)
})
  
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
      id,
      "name": faker.fakerES.lorem.sentence(10),
      "description": faker.fakerES.lorem.paragraph(3),
      "status" : "pending",
      "createdAt": faker.fakerES.date.anytime(),
    })
})
  
// Obtener una tarea específica de un usuario específico (Dos parámetros)
router.get(':taskId/users/:userId', (req, res) => {
    const { userId, taskId } = req.params;
    res.json({
      userId,
      taskId,
      "name": "Supermercado",
      "description": "Comprar pan, leche y huevos",
      "status": "pending",
      "createdAt": "2024/09/23"
    })
})

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: "Creado",
        body,
    })
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: "Updated",
        id,
        body,
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: "Deleted",
        id
    })
})

module.exports = router;