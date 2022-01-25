import  React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogImage from '../components/image_containers/LogImage';
import { PrimaryButton, TextButton } from '../components/buttons'
import AppTextInput from '../components/inputs/colors_app_textinput';
import { useEffect } from 'react';
import { styles } from './index';
import { resetPasswordService} from './../services/authenticationServices';

const ForgetScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [emailErrorDisc, setEmailErroDisc] = useState('');
  
  useEffect(() => {
    setEmailErroDisc('');
      }, [email]);

  const login = () => {
      if(email.trim().length==0){
        setEmailErroDisc('Please Enter Email');
      }
      else{
        proceedToForgetPassword()
      }
  }
  const register = () => {
    navigation.navigate('LoginScreen')
  }
  const authenticationSuccess = (user?:any) => {
    console.log("SignIn: ", JSON.stringify(user));
    if (user) {
      Alert.alert("password reset email will be send on your email")
    }
  }

  const authenticationFailure = (error) => {
    if(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Trainify", errorMessage)
    }
  }

  const proceedToForgetPassword = () => {
    // 1. check if user exists in database : authentication modue
    // 2. create account
    // 3. Create user in database : real time database
    console.log("proceedtologin function called")

     resetPasswordService(email, authenticationSuccess, authenticationFailure ); // Async function
   
   }

  return (
    
     <View style={styles.loginContainer}>
      <LogImage />
      <View>
        <AppTextInput placeholder="Enter Email" onChangeText={text => setEmail(text)} defaultValue={email} error={emailErrorDisc} />
      </View>
        <PrimaryButton title='ForgetPassword' onPress={login} />
      <Text style={styles.loginText}>Remember Password</Text>
      <View>
        <PrimaryButton title='Login' onPress={register} />
      </View>
    </View>
  );
}

export default ForgetScreen;