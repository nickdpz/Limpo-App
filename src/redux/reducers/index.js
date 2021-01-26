import { combineReducers } from 'redux';
import { user } from './user';
import { app } from './app';
import { messages } from './messages';
export default combineReducers({ user, app, messages });
