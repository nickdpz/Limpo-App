import base64 from 'react-native-base64';
import { API_URL } from '@env';
class Http {
  static instance = new Http();

  sign = async (user_email, password) => {
    try {
      let req = await fetch(API_URL + 'auth/api/sign-in', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${base64.encode(user_email + ':' + password)}`,
        },
      });
      let status = req.status;
      let data = await req.json();
      return { data, status };
    } catch (error) {
      throw Error(error);
    }
  };

  get = async (url) => {
    try {
      let req = await fetch(url);
      let status = req.status;
      let data = await req.json();
      return { data, status };
    } catch (error) {
      throw Error(error);
    }
  };

  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let status = req.status;
      let data = await req.json();
      return { data, status };
    } catch (error) {
      throw Error(error);
    }
  };
}

export default Http;
