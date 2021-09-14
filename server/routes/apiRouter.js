const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.getLatLong, apiController.getSuggestionsAndId, apiController.getImage, (req, res) => {
   res.status(200).json(res.locals.locationData);
});

module.exports = router;