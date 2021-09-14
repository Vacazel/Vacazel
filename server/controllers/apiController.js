const dotenv = require('dotenv').config();

const apiController = {};

apiController.getLatLong = async (req, res, next) => {
  try {
    const result = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=seoul&apikey=${process.env.TRAVEL_API}`)
  } catch(err){
    console.log('error in getLatLong');
    next({
      log: `apiController.getLatLong: Error ${err}`,
      message: {err: 'Error occurred in apiController.getLatLong. Check server terminal'},
    });
  }
}

apiController.getSuggestionsAndId = async (req, res, next) => {

}

apiController.getImage = async (req, res, next) => {

}


module.exports = apiController;