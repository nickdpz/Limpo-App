import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import state from './state';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, state, applyMiddleware(reduxThunk));
const persistor = persistStore(store);

export { store, persistor };
