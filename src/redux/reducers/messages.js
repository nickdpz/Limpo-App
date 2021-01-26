import defaultMessages from '../../data/messages';
import INITIAL_STATE from '../state/messages';
import {
  SET_MESSAGE,
  SET_MESSAGES,
  CLEAR_MESSAGES,
  SET_DEFAULT_MESSAGES,
} from '../types/messages';
export const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CLEAR_MESSAGES:
      return { ...state, messages: [] };
    case SET_MESSAGE:
      let newMessages = state.messages;
      const _id = `message-${newMessages.length + 1}`;
      newMessages.push({ _id, ...action.payload });
      return { ...state, messages: newMessages };
    case SET_MESSAGES:
      return { ...state, messages: action.payload };
    case SET_DEFAULT_MESSAGES:
      return { ...state, messages: defaultMessages.messages };
    default:
      return state;
  }
};
