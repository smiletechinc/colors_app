import * as React from 'react';
import { View } from 'react-native';
import LogoImage  from '../components/image_containers/LogoImage';
import { PrimaryButton } from '../components/buttons';
import styles from './colors_screen_style';

type Props = {
  navigation: any
}

const LandingScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation} = props;
  
  const LogFunc = () => {
    navigation.replace('LoginScreen')
  }
  
  const SignFunc = () => {
    navigation.navigate('SignupScreen')
  }

  return (
     <View style={styles.loginContainer}>

     <LogoImage />

      <View >
      <PrimaryButton title="Login" onPress={LogFunc}/>
      </View>
      
      <View >
      <PrimaryButton title="SignUp"  onPress={SignFunc}/>
      </View>
    </View>
  );
}

export default LandingScreen;