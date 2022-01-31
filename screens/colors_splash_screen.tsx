import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoImage from '../components/image_containers/LogoImage';
import { styles } from './index';
import { connect, useDispatch } from 'react-redux';
import {updateColor, updateColors, updateReduxColors} from '../redux/action/colorAction';
import { fetchColorsService } from './../services/colorsServices';

type Props = {
  navigation:any
  userAuthentication: any,
  updateColors: any,
  updateReduxColors: any,
}

const SplashScreen: React.FunctionComponent<Props> = (props) => {
  
  const {navigation, userAuthentication, updateColors, updateReduxColors} = props;
  const [animating, setAnimating] = useState(false);

    const fetchColorsSuccessFailure = (colorsError) => {
    console.log('colorsError: ', colorsError);
    updateReduxColors([]);
    navigation.replace('HomeScreen');

  }

  const fetchColorsSuccess = (colorsData) => {
    //1. Update redux for colors from firebase
    //2. Navigate to home
    console.log('colorsData:', Object.values(colorsData));
    const colors = Object.values(colorsData);
    console.log("colors ", colors);
    updateReduxColors(colors);
    navigation.replace('HomeScreen');
  }



  useEffect(() => {
    setTimeout(() => {
      setAnimating(true);
      if(userAuthentication){
        // updateColors()
        fetchColorsService(fetchColorsSuccess, fetchColorsSuccessFailure)  //call reducrer action
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

const mapDispatchToProps = dispatch => {
  console.log("Adding a value && Dispatch is Called");
  return {
    updateColors: () => {
      dispatch(updateColors());
    },
    updateReduxColors: (updatedcolor) => {
      dispatch(updateReduxColors(updatedcolor));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);

// export default SplashScreen;

