import  React, { useState } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogImage from '../components/image_containers/LogImage';
import { PrimaryButton, TextButton } from '../components/buttons'
import AppTextInput from '../components/inputs/colors_app_textinput';
import { useEffect } from 'react';
import { styles } from './index';
import { signInService, registerUserService } from './../services/authenticationServices';
import {ForgetScreen} from './index';

import { connect } from 'react-redux';
import { userstatus } from '../redux/action/userAction';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

const LoginScreen = (props) => {

  const {navigation, route, add} = props;
  const [email, setEmail] = useState('');
  const [password, setPaswword] = useState('');
  const [isFoucsed, setISFoucsed] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailErrorDisc, setEmailErroDisc] = useState('');
  
  useEffect(() => {
    setEmailErroDisc('');
    setPasswordError('');
      }, [email,password]);

  const login = () => {
      if(email.trim().length==0){
        setEmailErroDisc('Please Enter Email');
      }
      else if(password.trim().length == 0){
          setPasswordError('Please Enter Password');
      }
      else{
        proceedToLogin()
      }
  }
  const register = () => {
    navigation.navigate('SignupScreen')
  }

  const forgotpa = () => {
    navigation.navigate('ForgetScreen')
  }
  const authenticationSuccess = (user?:any) => {
    console.log("SignIn: ", JSON.stringify(user));  
    if (user) {
      Alert.alert("Login Succesfull")
      const userAuth: UserObject = {
          id: user.uid,
          email: email,
          name: email
        }
        add(userAuth);
      navigation.replace('HomeScreen', user.uid);
    }
  }

  const authenticationFailure = (error) => {
    if(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Trainify", errorMessage)
    }
  }

  const proceedToLogin = () => {
    // 1. check if user exists in database : authentication modue
    // 2. create account
    // 3. Create user in database : real time database
    console.log("proceedtologin function called")
     const authObject = {
       email,
       password,
     }
     signInService(authObject, authenticationSuccess, authenticationFailure ); // Async function
   
   }

  return (
    
     <View style={styles.loginContainer}>
      <LogImage />
      <View>
        <AppTextInput placeholder="Enter Email" onChangeText={text => setEmail(text)} defaultValue={email} error={emailErrorDisc} />
      </View>
        <AppTextInput placeholder="Enter Password" onChangeText={text => setPaswword(text)} secureTextEntry={true} defaultValue={password} error={passwordError}/>
        <PrimaryButton title='Login' onPress={login} />
      <View>
        <TextButton title='Forgot Password' onPress={forgotpa} /> 
      </View>
      <Text style={styles.loginText}>If you have not register, then click on</Text>
      <View>
        <PrimaryButton title='Register' onPress={register} />
      </View>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  console.log("Adding a value && Dispatch is Called");
  return {
    add: (usero) => {
      dispatch(userstatus(usero));
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginScreen);
// export default LoginScreen;