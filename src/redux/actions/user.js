import { SET_LOADING, CLEAR_LOADING, SET_ERROR } from '../types/app';
import { SET_USER } from '../types/user';
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
    console.log('response ', response);
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: {
        state: true,
        title: 'Try again',
        message: error.data.error,
      },
    });
  }
  dispatch({
    type: CLEAR_LOADING,
  });

  // dispatch({
  //   type: SET_USER,
  //   payload: {
  //     userName: name,
  //     userAge: age,
  //   },
  // });
};

export const setUser = ({ _id, userName, name, lastName, email, phone }) => ({
  type: SET_USER,
  payload: { _id, userName, name, lastName, email, phone },
});
