import { SET_MESSAGE, SET_MESSAGES, CLEAR_MESSAGES } from '../types/messages';

export const setMessage = (content, createdAt, userId, userName) => ({
  type: SET_MESSAGE,
  payload: {
    content,
    createdAt,
    user: {
      _id: userId,
      name: userName,
    },
  },
});

export const setMessages = (messages = []) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const clearMessages = () => ({
  type: CLEAR_MESSAGES,
});
