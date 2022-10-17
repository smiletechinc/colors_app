import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
// Custom UI components.
import {COLORS, SCREEN_HEIGHT, SCREEN_WIDTH} from '../constant/index';
const avatarIcon = require('../resources/images/avatar.png');
import {connect, useDispatch} from 'react-redux';
import {userstatus} from '../redux/action/userAction';

// import {AuthContext} from './../../context/auth-context';
import {
  logoutService,
  deleteAccountService,
} from '../services/authenticationServices';
import RNRestart from 'react-native-restart'; // Import package from node modules
import LogoutAlertModal from '../components/models/logOutAlertModal';

type Props = {
  navigation?: any;
  route?: any;
  add?: any;
};

const SignoutScreen: FunctionComponent<Props> = props => {
  const {navigation, route, add} = props;
  const [logOutCheck, setLogOutCheck] = useState(false);
  const [deleteAccountCheck, setDeleteAccountCheck] = useState(false);
  const [userName, setUserName] = useState('User');

  //   useEffect(() => {
  //     if (authObject) {
  //       setUserName(`${authObject.firstName} ${authObject.lastName}`);
  //     }
  //   }, [authUser, authObject]);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Account',

      //     headerRight: () => (
      //     <LogOutButton icon={LogOutImage} onPress={LogAlert}/>
      //   ),
    });
  }, [navigation]);
  const logoutSuccess = (userCredential?: any) => {
    console.log('Logout sucess from firebase');
    const userAuth: UserObject = {
      id: '',
      email: '',
      name: '',
    };
    add(userAuth);
    navigation.replace('LandingScreen');
  };

  const logoutFailure = error => {
    console.log('Error in logout from firebase');
    // logoutUser();
    // RNRestart.Restart();
  };

  const deleteAccountSuccess = (userCredential?: any) => {
    console.log('Delete account sucess from firebase');
    const userAuth: UserObject = {
      id: '',
      email: '',
      name: '',
    };
    add(userAuth);
    navigation.replace('LandingScreen');
  };

  const deleteAccountFailure = error => {
    console.log('Error in delete account from firebase');
    // logoutUser();
    // RNRestart.Restart();
  };

  const proceedToLogout = () => {
    logoutService(logoutSuccess, logoutFailure);
  };

  const proceedToDeleteAccount = () => {
    deleteAccountService(deleteAccountSuccess, deleteAccountFailure);
  };

  return (
    // <ScreenWrapperWithHeader
    //   title="Account"
    //   navigation={navigation}
    //   route={route}
    //   logoutcheck={true}>

    // </ScreenWrapperWithHeader>
    <ScrollView>
      <View style={[styles.home_main_view]}>
        <View style={{marginTop: 24}}>
          <View>
            <View
              style={{
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 8,
              }}>
              <Image
                source={avatarIcon}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
              <Text
                style={[
                  styles.record_and_upload_text,
                  {color: '#000000', marginTop: 32},
                ]}>
                {userName}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            // flex: 3,
            justifyContent: 'flex-end',
            flexDirection: 'column',
            marginTop: '98%',
          }}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setLogOutCheck(true);
              setDeleteAccountCheck(false);
            }}>
            <Text style={[styles.textStyle1, {color: '#FFFFFF'}]}> Logout</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonOpen, {marginLeft: 16}]}
            onPress={() => {
              setDeleteAccountCheck(true);
              setLogOutCheck(false);
            }}>
            <Text style={styles.textStyle1}>Delete Account</Text>
          </Pressable>
        </View>
      </View>
      {deleteAccountCheck && (
        <LogoutAlertModal
          visible={deleteAccountCheck}
          title={'DELETE ACCOUNT'}
          desc={'Delete Your Account'}
          buttonTitle={'Delete'}
          onAcceptButton={() => proceedToDeleteAccount()}
          onCancelButton={() => setDeleteAccountCheck(false)}
        />
      )}
      {logOutCheck && (
        <LogoutAlertModal
          visible={logOutCheck}
          title={'Logout'}
          desc={'Logout from your account'}
          buttonTitle={'Logout'}
          onAcceptButton={() => proceedToLogout()}
          onCancelButton={() => setLogOutCheck(false)}
        />
      )}
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => {
  console.log('Adding a value && Dispatch is Called');
  return {
    add: usero => {
      dispatch(userstatus(usero));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignoutScreen);
// export default SignoutScreen;

const styles = StyleSheet.create({
  home_main_view: {
    flex: 1,
    backgroundColor: '#31A8A8',
    paddingTop: Platform.OS === 'ios' ? (SCREEN_WIDTH / 100) * 2 : 10,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    minHeight: SCREEN_HEIGHT,
  },
  record_and_upload_text: {
    lineHeight: 22,
    fontWeight: 'normal',
    color: '#FF4E4E',
    textAlign: 'left',
    textAlignVertical: 'bottom',
    fontSize: 18,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    elevation: 2,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'rgba(0,142,193,0.1)',
    display: 'flex',
    marginLeft: 16,
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: '#FF4E4E',
    marginTop: 24,
    marginBottom: 54,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle1: {
    lineHeight: 22,
    fontWeight: 'normal',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
