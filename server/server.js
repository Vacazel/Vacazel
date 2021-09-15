const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use(express.static(path.resolve(__dirname, '../client')));

app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
);

app.use('/api', apiRouter);


app.use('*', (req, res) => {
  res.status(404).send('This url does not exist');
})

app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught middleware error',
    status: 500,
    message: {error: 'An Error occured with server and middleware'},
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

