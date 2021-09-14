const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', (req, res) => {
  res.status(200).json(res.locals.latLong);
});

module.exports = router;