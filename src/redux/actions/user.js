import axios from 'axios';
import { SET_LOADING } from '../types/app';
import { SET_USER } from '../types/user';
import base64 from 'react-native-base64';
import { API_URL } from '@env';
axios.defaults.baseURL = API_URL;
export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  try {
    const { data } = await axios.post(
      '/sign',
      {},
      {
        headers: {
          Authorization: `Basic ${base64.encode(email + ':' + password)}`,
        },
      }
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const setUser = (name, age) => ({
  type: SET_USER,
  payload: {
    userName: name,
    userAge: age,
  },
});
