import  React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogImage from '../components/image_containers/LogImage';
import { PrimaryButton, TextButton } from '../components/buttons'
import AppTextInput from '../components/inputs/colors_app_textinput';
import { useEffect } from 'react';
import { styles } from './index';

const LoginScreen = ({ navigation }) => {

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
      navigation.replace('HomeScreen');
      }
      
  }
  const register = () => {
    navigation.navigate('SignupScreen')
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
        <TextButton title='Forgot Password' onPress={login} /> 
      </View>
      <Text style={styles.loginText}>If you have not register, then click on</Text>
      <View>
        <PrimaryButton title='Register' onPress={register} />
      </View>
    </View>
  );
}

export default LoginScreen;