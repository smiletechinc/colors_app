import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';

import SplashScreen from './Splash_Screen';
import LandingScreen from './Landing_Screen';
import Login_Screen from './Login_Screen';
import SignupScreen from './Signup_Screen';
import HomeScreen from './Home_Screen';
import AddColorScreen from './Add_Color';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen  name="SplashScreen" component={SplashScreen} options={{animationEnabled: false, header: () => null}} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{title: "", header: ()=>null}}/>
        <Stack.Screen name="LoginScreen" component={Login_Screen} options={{title: "", header: ()=>null}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{title: "", header: ()=>null}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{title: "Home"}}/>
        <Stack.Screen name="AddColorScreen" component={AddColorScreen} options={{title:"Add Color"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
