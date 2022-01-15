import * as React from 'react';
import {  Text, View, Image, StyleSheet, Button, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogoImage  from '../components/image_containers/LogoImage';
import { PrimaryButton } from '../components/buttons';
type Props = {
  navigation: any
}

const LandingScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation} = props;
  
  const LogFunc = () => {
    navigation.replace('LoginScreen')
  }
  
  const SignFunc = () => {
    navigation.navigate('SignupScreen')
  }

  return (
     <View style={styles.container}>

     <LogoImage />

      <View >

      <PrimaryButton title="Login" onPress={LogFunc}/>
      </View>
      
      <View >
      <PrimaryButton title="SignUp"  onPress={SignFunc}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#31A8A8',},
});

export default LandingScreen;