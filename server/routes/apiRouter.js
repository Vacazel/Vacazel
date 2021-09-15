const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const bucketController = require('../controllers/bucketController');
const locationsController = require('../controllers/locationsController');
const userController = require('../controllers/userController');

router.get('/', userController.getUserData, userController.lastPlaceVisted, locationsController.getLocations, (req, res) => {
   res.status(200).json(res.locals);
});

router.get('/callapi', (req, res) => {
  res.status(200).json(res.locals.locationData);
})

router.post('/', apiController.getLatLong, apiController.getSuggestionsAndId, apiController.getImage, locationsController.addLocation, (req, res) => {
  res.status(200).json(res.locals.locationsList);
});

module.exports = router;