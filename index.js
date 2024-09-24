const express = require('express');
const routerApi = require('./routes');

const {errorHandler, catchError, boomErrorHandler} = require('./middlewares/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

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
