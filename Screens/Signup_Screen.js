import React, {useState} from 'react';
import {  Text, 
          View, 
          TextInput,
          StyleSheet, 
          Button, 
          Image,
          Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card } from 'react-native-paper';
import LogImage from '../components/image/LogImage';
// import AppButton from '../components/colors_app-button';
import AppTextInput from '../components/inputs/colors_app_textinput';
import { PrimaryButton, } from '../components/buttons/colors_buttons'
const Signup_Screen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPaswword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('');

  const LogFunc = () => {
    navigation.replace('LoginScreen')
  }
  return (
     <View style={styles.container}>
     <LogImage />
      <View>
        <AppTextInput placeholder="Enter Name" onChangeText={text => setName(text)} defaultValue={name} />
      </View>
      <View>
        <AppTextInput placeholder="Enter Email" onChangeText={text => setEmail(text)} defaultValue={email} />
      </View> 
      <View>
        <AppTextInput placeholder="Enter Password" onChangeText={text => setPaswword(text)} secureTextEntry={true} defaultValue={password} />
      </View>    
      <View>
        <AppTextInput placeholder="Enter Confirm Password" onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} defaultValue={confirmpassword} />
      </View>
      <View>
        <PrimaryButton title='Register' onPress={LogFunc} />
      </View>
      <Text> Already Have Account Click On LogIn Button</Text>
      <View>
        <PrimaryButton title='Login' onPress={LogFunc} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: "#31A8A8", },
});

export default Signup_Screen;