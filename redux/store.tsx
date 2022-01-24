import { createStore, combineReducers, applyMiddleware } from 'redux';
import colorReducer from '../redux/reducer/colorReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  colors: colorReducer
});

const persistConfig = {
  key: 'root',
  versino:0,
  storage:AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { persistor, store };
