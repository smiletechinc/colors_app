import  React, { useState } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';
import LogImage from '../components/image/LogImage';
import { PrimaryButton, TextButton } from '../components/buttons/colors_buttons'
import AppTextInput from '../components/inputs/colors_app_textinput';

const Login_Screen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPaswword] = useState('');
  const [isFoucsed, setISFoucsed] = useState(true);
  const [error, setError] = useState('');

  const login = () => {
    if(email.trim().length==0)
    {
      setISFoucsed(false);
      setError('Please enter Email');
    }
    else{
      navigation.replace('HomeScreen');
    }
      
  }
  const register = () => {
    navigation.navigate('SignupScreen')
  }

  return (
    
     <View style={styles.container}>
      <LogImage />
      <View>
        <AppTextInput placeholder="Enter Email" onChangeText={text => setEmail(text)} defaultValue={email} error={error} focus={isFoucsed}/>
      </View>
        <AppTextInput placeholder="Enter Password" onChangeText={text => setPaswword(text)} secureTextEntry={true} defaultValue={password} />
        <PrimaryButton title='Login' onPress={login} />
      <View>
        <TextButton title='Forgot Password' onPress={login} /> 
      </View>
      <Text style={{fontSize: 16, marginTop:4, paddingBottom: 0, marginLeft: 12}}>If you have not register, then click on</Text>
      <View>
        <PrimaryButton title='Register' onPress={register} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#31A8A8", },
});

export default Login_Screen;