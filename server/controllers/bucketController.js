const db = require('../db/dbConnect');

const bucketController = {};

bucketController.getBucket = async (req, res, next) => {
  const query = 'SELECT l.name, l.image from locations l JOIN bucket_list b ON b.location_id = l.id JOIN users u ON u.id = b.user_id;';
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