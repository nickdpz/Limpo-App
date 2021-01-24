import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import state from './state';
export default createStore(reducer, state, applyMiddleware(reduxThunk));
