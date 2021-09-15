const db = require('../db/dbConnect');

const locationsController = {};

locationsController.getLocations = async (req, res, next) => {
  const query = 'SELECT * FROM locations';
  const result = await db.query(query);
  res.locals.locationsList = result.rows;
  next();
}

locationsController.addLocation = async (req, res, next) => {
  try {
    for(const data of res.locals.locationData){
      const { xid, name, kinds, image } = data;
      console.log(data);
      const params = [xid, name, kinds, image];
      const query = `INSERT INTO locations (xid, name, kinds, image)
      VALUES ($1, $2, $3, $4)
      RETURNING *`;
      const result = await db.query(query, params);
    }
    
    return next();
  } catch (err){
    return next({
      log: `locationsController.addLocation: Error ${err}`,
      message: {err: 'Error occurred in locationsController.addLocation. Check server terminal'},
    });
  }

}

locationsController.editLocation = async (req, res, next) => {

}

locationsController.deleteLocation = async (req, res, next) => {

}


module.exports = locationsController;