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
import { createStore, combineReducers } from 'redux';
import colorReducer from '../redux/reducer/colorReducer';

const rootReducer = combineReducers({
  colors: colorReducer
});

const configureStore = () => {
  console.log("Store being configured!");
  return createStore(rootReducer);
}

export default configureStore;