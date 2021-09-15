const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const bucketController = require('../controllers/bucketController');
const locationsController = require('../controllers/locationsController');

router.get('/', locationsController.getLocations, (req, res) => {
   res.status(200).json(res.locals.locationsList);
});

router.get('/callapi', (req, res) => {
  res.status(200).json(res.locals.locationData);
})

router.post('/', apiController.getLatLong, apiController.getSuggestionsAndId, apiController.getImage, locationsController.addLocation, (req, res) => {
  res.status(200).json(res.locals.locationsList);
});

module.exports = router;