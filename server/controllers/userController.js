const db = require('../db/dbConnect');

const userController = {};

userController.getUser = async (req, res, next) => {
  const query = '';
  const result = await db.query(query);
  res.locals.userList;
  next();
}

userController.adduserItem = async (req, res, next) => {

}

userController.edituserItem = async (req, res, next) => {

}

userController.deleteuserItem = async (req, res, next) => {

}


module.exports = userController;