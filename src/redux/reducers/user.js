import INITIAL_STATE from '../state/user';
import { SET_USER } from '../types/user';
export const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
