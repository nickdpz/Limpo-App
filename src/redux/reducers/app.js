import INITIAL_STATE from '../state/app';
import {
  SET_LOADING,
  CLEAR_LOADING,
  SET_ROUTER,
  SET_ERROR,
  CLEAR_ERROR,
} from '../types/app';
export const app = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case SET_ROUTER:
      return {
        ...state,
        initialRoute: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: {
          state: false,
          title: '',
          message: '',
        },
      };
    default:
      return state;
  }
};
