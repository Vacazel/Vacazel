const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const cors = require('cors');

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, 'client')));

// app.get('/', (req, res) =>
//   res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
// );

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

