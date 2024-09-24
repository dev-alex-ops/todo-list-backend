const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const {errorHandler, catchError, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

// INCLUIR POLITICA DE CORS
// const whitelist = ['http://localhost:5000']
// const options = {
//   origin: (origin, callback) => {
//     if (origin.includes(whitelist)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Access Denied by CORS policy'));
//     }
//   }
// }
// app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mundo cruel');
});

routerApi(app);

app.use(catchError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Running on port', port);
});
