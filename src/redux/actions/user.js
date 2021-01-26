import {
  SET_LOADING,
  CLEAR_LOADING,
  SET_ERROR,
  SET_LOGIN,
  CLEAR_LOGIN,
} from '../types/app';
import { SET_USER, CLEAR_USER } from '../types/user';
import { CLEAR_MESSAGES, SET_DEFAULT_MESSAGES } from '../types/messages';
import http from '../../lib/http';

export const login = (user_email, password) => async (dispatch) => {
  let response;
  dispatch({
    type: SET_LOADING,
  });
  try {
    response = await http.instance.sign(user_email, password);
    if (response.data.error) {
      throw response;
    }
    dispatch({
      type: CLEAR_LOADING,
    });
    dispatch({
      type: SET_LOGIN,
    });
    dispatch({
      type: SET_USER,
      payload: { ...response.data.user, token: response.data.token },
    });
    dispatch({
      type: SET_DEFAULT_MESSAGES,
    });
  } catch (error) {
    dispatch({
      type: CLEAR_LOADING,
    });
    dispatch({
      type: SET_ERROR,
      payload: {
        state: true,
        title: 'Try again',
        message: error.data.error,
      },
    });
    throw error;
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: CLEAR_LOGIN,
  });
  dispatch({
    type: CLEAR_USER,
  });
  dispatch({
    type: CLEAR_MESSAGES,
  });
  // dispatch({
  //   type: SET_DEFAULT_MESSAGES,
  // });
};

export const setUser = ({ _id, userName, name, lastName, email, phone }) => ({
  type: SET_USER,
  payload: { _id, userName, name, lastName, email, phone },
});
