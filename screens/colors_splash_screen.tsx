import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogoImage from '../components/image_containers/LogoImage';
const SplashScreen = ({navigation}) => {
  
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setAnimating(true);
      navigation.replace('LandingScreen');
     
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <LogoImage />
      <Text style={{color:'#000000', marginTop:8, marginLeft:8, fontSize:16}}> ColorApp </Text>
        { <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
        />
       }
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31A8A8',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});