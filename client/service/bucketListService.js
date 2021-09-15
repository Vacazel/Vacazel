import axios from 'axios';

class BucketListService {
  static async getBucketList(url) {
    try {
      let result = await axios.get(url);
      console.log(result);
      return result.data;
    } catch (err) {
      console.log('this is err from get bucket list service file', err);
    }
  }

  static async postBucketPlace(url, placeName) {
    try {
      let result = await axios.post(url, placeName);
      return result.data;
    } catch (err) {
      console.log('this is err from post bucket list service file', err);
    }
  }

  static async deleteBucketPlace(url, id) {
    try {
      let result = await axios.delete(url, id);
      return result.data;
    } catch (err) {
      console.log('this is err from delete bucket list service file', err);
    }
  }
}

export default BucketListService;
