import {SCREEN_HEIGHT} from '../constant/';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31A8A8',
  },
  flatcontainer: {
    backgroundColor: '#31A8A8',
    flex: 2,
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  splashText: {
    color: '#000000',
    marginTop: 8,
    marginLeft: 8,
    fontSize: 16,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#31A8A8',
    minHeight: SCREEN_HEIGHT,
  },
  loginText: {
    fontSize: 16,
    marginTop: 4,
    paddingBottom: 0,
    marginLeft: 12,
  },
  addColorcontainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#31A8A8',
  },
  slidertext: {
    marginTop: 10,
    fontSize: 20,
  },
  sliderview: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '100%',
    paddingleft: 64,
  },
});

export default styles;
