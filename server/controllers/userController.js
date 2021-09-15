const db = require('../db/dbConnect');

const userController = {};

userController.getUserData = async (req, res, next) => {
  const query = "SELECT * FROM users WHERE id = 'e87bfe51-a6d5-46c9-b0c6-e3f5d0eeffe3';";
  const result = await db.query(query);
  // console.log(result.rows[0]);
  res.locals.currentUser = result.rows[0];
  next();
}

userController.lastPlaceVisted = async (req, res, next) => {
  const query = "select last_place_visited, image  from users LEFT JOIN locations ON users.last_place_visited = locations.name;";
  const result = await db.query(query);
  console.log(result.rows[0]);
  res.locals.lastPlaceVisted = result.rows[0];
  next();
}

userController.adduserItem = async (req, res, next) => {

}

userController.edituserItem = async (req, res, next) => {

}

userController.deleteuserItem = async (req, res, next) => {

}


module.exports = userController;