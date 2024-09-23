const express = require('express');
const faker = require('@faker-js/faker');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo cruel');
});

// Obtener una lista completa de usuarios
app.get('/users', (req, res) => {
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
app.get('/users/:id', (req, res) => {
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


app.get('/tasks', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Tarea",
      "description": "1, 2 y 3 de la página 12",
      "status" : "Done",
      "createdAt": "2024/09/23",
    },
    {
      "id": 2,
      "name": "Comida",
      "description": "Albóndigas, pasta y arroz",
      "status" : "pending",
      "createdAt": "2024/09/21",
    },
    {
      "id": 3,
      "name": "Supermercado",
      "description": "Comprar pan, leche y huevos",
      "status" : "pending",
      "createdAt": "2024/09/23",
    },
  ])
})

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    "name": "Supermercado",
    "description": "Comprar pan, leche y huevos",
    "status" : "pending",
    "createdAt": "2024/09/23",
  })
})

// Obtener una tarea específica de un usuario específico (Dos parámetros)
app.get('/tasks/:taskId/users/:userId', (req, res) => {
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

app.listen(port, () => {
  console.log('Running on port', port);
});
