import {
  SET_LOADING,
  CLEAR_LOADING,
  SET_ERROR,
  CLEAR_ERROR,
  SET_ROUTER,
} from '../types/app';

export const setLoading = () => ({
  type: SET_LOADING,
});

export const clearLoading = () => ({
  type: CLEAR_LOADING,
});

export const setError = (title, message) => ({
  type: SET_ERROR,
  payload: {
    state: true,
    title,
    message,
  },
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const setRouter = (payload) => ({
  type: SET_ROUTER,
  payload,
});
