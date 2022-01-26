import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoImage from '../components/image_containers/LogoImage';
import { styles } from './index';
import { connect, useDispatch } from 'react-redux';

type Props = {
  navigation:any
  userAuthentication: any,
}

const SplashScreen: React.FunctionComponent<Props> = (props) => {
  
  const {navigation, userAuthentication} = props;
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(true);
      if(userAuthentication){
        navigation.replace('HomeScreen');
      }
      else {
        navigation.replace('LandingScreen');
      }
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <LogoImage />
      <Text style={styles.splashText}> ColorApp </Text>
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

const mapStateToProps = state => {
  console.log("Redux user props are comes:", JSON.stringify(state.userlogin.userAuthenticate));
  return {
    userAuthentication: state.userlogin.userAuthenticate
  }
}

export default connect(mapStateToProps)(SplashScreen);

// export default SplashScreen;