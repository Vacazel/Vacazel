const db = require('../db/dbConnect');

const locationsController = {};

locationsController.getLocations = async (req, res, next) => {
  const query = 'SELECT * FROM locations';
  const result = await db.query(query);
  res.locals.locationsList = result;
  next();
}

locationsController.addLocation = async (req, res, next) => {

  try {
    const { xid, name, kinds, image } = req.body;
    const params = [xid, name, kinds, image];
    console.log(req.body);
    const query = `INSERT INTO locations (xid, name, kinds, image)
    VALUES ($1, $2, $3, $4)
    RETURNING *`;
    const result = await db.query(query, params);
    console.log(query);
    res.locals.newLocation = result.rows[0];
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