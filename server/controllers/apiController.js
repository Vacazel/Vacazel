const dotenv = require('dotenv').config();
const axios = require('axios');

const apiController = {};

apiController.getLatLong = async (req, res, next) => {
  try {
    let result = {};
    await axios.get(`https://api.opentripmap.com/0.1/en/places/geoname?name=seoul&apikey=${process.env.TRAVEL_API}`)
    .then(response => {
      const { name, lat, lon } = response.data;
      result = { name, lat, lon};
      res.locals.apiObj = result;
    })
    .catch(error => console.log(error))
    next();
  } catch(err){
    console.log('error in getLatLong');
    next({
      log: `apiController.getLatLong: Error ${err}`,
      message: {err: 'Error occurred in apiController.getLatLong. Check server terminal'},
    });
  }
}

apiController.getSuggestionsAndId = async (req, res, next) => {
  const {name, lat, lon} = res.locals.apiObj;
  try {
    await axios.get(`https://api.opentripmap.com/0.1/en/places/autosuggest?name=${name}&radius=5000&lon=${lon}&lat=${lat}&apikey=${process.env.TRAVEL_API}`)
    .then(response => {
      console.log(response.data.features[0].properties.xid);
      const featuresData = response.data.features
      const result = [];
      for(let i = 0; i < featuresData.length; i++){
        result.push(featuresData[i].properties);
        // console.log(featuresData[i].properties);
      }
      res.locals.locationData = result;
    })
    .catch(error => console.log(error))
    next();
  } catch(err){
    console.log('error in getSuggestionsAndId');
    next({
      log: `apiController.getSuggestionsAndId: Error ${err}`,
      message: {err: 'Error occurred in apiController.getSuggestionsAndId. Check server terminal'},
    });
  }
}

apiController.getImage = async (req, res, next) => {
  
  try {
    const dataLength = res.locals.locationData.length
    console.log(res.locals.locationData);
    for(let i = 0; i < dataLength; i++){
      const xid = res.locals.locationData[i]['xid']
      await axios.get(`https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${process.env.TRAVEL_API}`)
      .then(response => {
      console.log(response.data.preview.source);
      res.locals.locationData[i]['image'] = response.data.preview.source
    })
    .catch(error => console.log(error))
    }
    res.locals.locationData = res.locals.locationData.filter((obj, index) => 'image' in res.locals.locationData[index]);
    next();
  } catch(err){
    console.log('error in getSuggestionsAndId');
    next({
      log: `apiController.getSuggestionsAndId: Error ${err}`,
      message: {err: 'Error occurred in apiController.getSuggestionsAndId. Check server terminal'},
    });
  }
}


module.exports = apiController;