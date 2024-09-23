const express = require('express');
const faker = require('@faker-js/faker');

const router = express.Router();

// Obtener una lista completa de usuarios
router.get('/', (req, res) => {
    const users = [];
    for (let i = 0; i < 20; i++) {
      users.push({
        id: i+1,
        username: faker.fakerES.internet.userName(),
        mail: faker.fakerES.internet.email(),
        fisrtName: faker.fakerES.person.firstName(),
        lastName: faker.fakerES.person.lastName(),
        birthdate: faker.fakerES.date.anytime(),
      })
    }
  
    const { limit, offset } = req.query;
    if (limit && offset) {
      res.json({
        limit,
        offset
      })
    } else {
      res.json(users)
    }
})
  
// Obtener un usuario por el id (Enviado por parámetro)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
      "id": id,
      "username": "paco",
      "mail": "pacopepe@gmail.com",
      "firstName": "Francisco José",
      "lastName": "Papito Muñaño",
      "birthdate": "1992/10/04",
    })
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: "Created",
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Updated",
    data: body,
    id
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