import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogImage from '../components/image_containers/LogImage';
import AppTextInput from '../components/inputs/colors_app_textinput';
import {PrimaryButton} from '../components/buttons';
import {useEffect} from 'react';
import styles from './colors_screen_style';
import {
  signUpService,
  registerUserService,
} from './../services/authenticationServices';
import {SCREEN_HEIGHT} from '../constant';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPaswword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  useEffect(() => {
    setNameError('');
    setPasswordError('');
    setEmailError('');
    setConfirmPasswordError('');
  }, [name, email, password, confirmpassword]);

  const LogFunc = () => {
    if (name.trim().length == 0) {
      setNameError('Please Enter Name');
    } else if (email.trim().length == 0) {
      setEmailError('please enter email');
    } else if (password.trim().length == 0) {
      setPasswordError('Please enter password');
    } else if (confirmpassword.trim().length == 0) {
      setConfirmPasswordError('Please enter confirm password');
    } else if (password != confirmpassword) {
      alert('Password does not match with Confirm Password');
    } else {
      proceedToSignup();
    }
  };

  const goToLoginSceen = () => {
    navigation.navigate('LoginScreen');
  };

  const registrationSuccess = () => {
    Alert.alert('ColorsApp', `You've signed up successfully.`);
    goToLoginSceen();
  };

  const authenticationSuccess = (user?: any) => {
    console.log('Signup: ', JSON.stringify(user));
    if (user) {
      proceedToRegister(user);
    }
  };

  const proceedToRegister = user => {
    const id = user.uid;
    const userObject: UserObject = {
      id,
      email,
      name,
    };

    registerUserService(userObject, registrationSuccess, authenticationFailure);
  };

  const authenticationFailure = error => {
    if (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert('ColorsApp', errorMessage);
    }
  };

  const proceedToSignup = () => {
    const authObject = {
      email,
      password,
    };
    signUpService(authObject, authenticationSuccess, authenticationFailure); // Async function
  };

  const log = () => {
    navigation.replace('LoginScreen');
  };

  return (
    <ScrollView>
      <View style={[styles.loginContainer, {minHeight: SCREEN_HEIGHT}]}>
        <LogImage />
        <View>
          <AppTextInput
            placeholder="Enter Name"
            onChangeText={text => setName(text)}
            defaultValue={name}
            error={nameError}
          />
        </View>
        <View>
          <AppTextInput
            placeholder="Enter Email"
            onChangeText={text => setEmail(text)}
            defaultValue={email}
            error={emailError}
          />
        </View>
        <View>
          <AppTextInput
            placeholder="Enter Password"
            onChangeText={text => setPaswword(text)}
            secureTextEntry={true}
            defaultValue={password}
            error={passwordError}
          />
        </View>
        <View>
          <AppTextInput
            placeholder="Enter Confirm Password"
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={true}
            defaultValue={confirmpassword}
            error={confirmPasswordError}
          />
        </View>
        <View>
          <PrimaryButton title="Register" onPress={LogFunc} />
        </View>
        <Text> Already Have Account Click On LogIn Button</Text>
        <View>
          <PrimaryButton title="Login" onPress={log} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;
