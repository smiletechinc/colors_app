import React, {useState} from 'react';
import {  Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogImage from '../components/image_containers/LogImage';
// import AppButton from '../components/colors_app-button';
import AppTextInput from '../components/inputs/colors_app_textinput';
import { PrimaryButton } from '../components/buttons'
import { useEffect } from 'react';
import { styles } from './index';

const SignupScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPaswword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  useEffect(() => {
    setNameError('');
    setPasswordError('');
    setEmailError('');
    setConfirmPasswordError('');
  }, [name,email,password,confirmpassword]);
  
  const LogFunc = () => {
    if(name.trim().length==0)
    {
      setNameError('Please Enter Name');
    }
    else if(email.trim().length==0)
    {
      setEmailError("please enter email");
    }
    else if(password.trim().length==0)
    {
      setPasswordError('Please enter password');
    }
    else if(confirmpassword.trim().length==0){
      setConfirmPasswordError('Please enter confirm password');
    } else if(password != confirmpassword) {
      alert('Password does not match with Confirm Password');
    } else{
      navigation.replace('LoginScreen');
    }
  }
  return (
     <View style={styles.loginContainer}>
     <LogImage />
      <View>
        <AppTextInput placeholder="Enter Name" onChangeText={text => setName(text)} defaultValue={name} error={nameError}/>
      </View>
      <View>
        <AppTextInput placeholder="Enter Email" onChangeText={text => setEmail(text)} defaultValue={email} error={emailError}/>
      </View> 
      <View>
        <AppTextInput placeholder="Enter Password" onChangeText={text => setPaswword(text)} secureTextEntry={true} defaultValue={password} error={passwordError}/>
      </View>    
      <View>
        <AppTextInput placeholder="Enter Confirm Password" onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} defaultValue={confirmpassword} error={confirmPasswordError}/>
      </View>
      <View>
        <PrimaryButton title='Register' onPress={LogFunc} />
      </View>
      <Text style={styles.loginText}> Already Have Account Click On LogIn Button</Text>
      <View>
        <PrimaryButton title='Login' onPress={LogFunc} />
      </View>
    </View>
  );
}

export default SignupScreen;