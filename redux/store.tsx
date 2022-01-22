// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import colorReducer from './reducer/colorReducer'

// const persistConfig = {
//   key: 'colors',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, colorReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
import { createStore, combineReducers, applyMiddleware } from 'redux';
import colorReducer from '../redux/reducer/colorReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
// import storage from "redux-persist/es/storage";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
  colors: colorReducer
});

// persist config
const persistConfig = {
  key: 'root',
  versino:0,
  storage:AsyncStorage,
};
// wrap persist API around root reducer and store
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const configureStore = () => {
//   console.log("Store being configured!");
//   return createStore(persistedReducer);
// }

const middleware = applyMiddleware(thunk, logger);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

// const persistedstore = () => {
//   return persistStore(configureStore, persistedReducer);
// }

// export default configureStore;

export { persistor, store };
