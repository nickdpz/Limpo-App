import INITIAL_STATE from '../state/user';
import { SET_USER, CLEAR_USER } from '../types/user';
export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        _id: action.payload._id,
        userName: action.payload.userName,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        token: action.payload.token,
      };
    case CLEAR_USER:
      return {
        ...state,
        _id: '',
        userName: '',
        name: '',
        lastName: '',
        email: '',
        phone: '',
        token: '',
      };
    default:
      return state;
  }
};
