import INITIAL_STATE from '../state/app';
import SET_LOADING from '../types/app';
export const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_ROUTER':
      return {
        ...state,
        initialRoute: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
