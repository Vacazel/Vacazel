const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const bucketController = require('../controllers/bucketController');
const locationsController = require('../controllers/locationsController');

router.get('/', locationsController.getLocations, (req, res) => {
   res.status(200).json(res.locals.locationsList);
});

router.get('/callApi', apiController.getLatLong, apiController.getSuggestionsAndId, apiController.getImage, (req, res) => {
  res.status(200).json(res.locals.locationData);
})

router.post('/', locationsController.addLocation, bucketController.addBucketItem, (req, res) => {
  res.status(200).json(res.locals.locationsList);
});

module.exports = router;