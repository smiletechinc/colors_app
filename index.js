/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import configureStore from './redux/store';
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import React from 'react';

const store = configureStore();

const RNRedux = () => (
   
   <Provider store = { store }>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => RNRedux);