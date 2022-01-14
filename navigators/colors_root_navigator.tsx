import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {SplashScreen} from '../screens';
import {LandingScreen} from '../screens';
import {LoginScreen} from '../screens';
import {SignupScreen} from '../screens';
import {HomeScreen} from '../screens';
import {AddColorScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen  name="SplashScreen" component={SplashScreen} options={{animationEnabled: false, header: () => null}} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{title: "", header: ()=>null}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "", header: ()=>null}}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{title: "", header: ()=>null}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{title: "Home"}}/>
        <Stack.Screen name="AddColorScreen" component={AddColorScreen} options={{title:"Add Color"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
