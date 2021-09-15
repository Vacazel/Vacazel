import axios from 'axios';

class UserDataService {
  static async getUserData(url) {
    try {
      let result = await axios.get(url);
      // console.log(result);
      return result.data;
    } catch (err) {
      console.log('this is err from get user data service file', err);
    }
  }

  static async putLastPlace(url, data) {
    try {
      let result = await axios.put(url, data);
      return result;
    } catch (err) {
      console.log('this is err from put last place service file', err);
    }
  }
}

export default UserDataService;
