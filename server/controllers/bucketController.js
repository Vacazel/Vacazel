const db = require('../db/dbConnect');

const bucketController = {};

bucketController.getBucket = async (req, res, next) => {
  const query = '';
  const result = await db.query(query);
  res.locals.bucketList;
  next();
}

bucketController.addBucketItem = async (req, res, next) => {

}

bucketController.editBucketItem = async (req, res, next) => {

}

bucketController.deleteBucketItem = async (req, res, next) => {

}


module.exports = bucketController;