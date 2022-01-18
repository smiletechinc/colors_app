import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
import { IconButton } from '../components/buttons';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatG } from '../components/grid';
import AddColorScreen from './colors_add_color_screen';
import { FlatGrid } from 'react-native-super-grid';
// import {dummyColors} from '../resources/dummy_data/dummy_colors';
// import { Colors } from 'types';

type Props = {
  navigation: any;
  route: any;
  reduxColors: Colors;
}

const HomeScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation, route, reduxColors} = props;
  const [isFetching, setIsFetching] = useState(false);
  const [colors, setColors] = useState<Colors>(reduxColors);
  const [updatingColors, setUpdatingColors] = useState<boolean>(false);

  useEffect(() => {
    console.log('dummyColors: ', reduxColors);
  }, [colors]);

  useEffect(() => {
    setUpdatingColors(true);
    if(route.params) {
      const { color, colorIndex } = route.params;
      console.log('Params: ', route.params);
      let tempColors = colors;
      console.log('Color index:', colorIndex);
      if (colorIndex) {
        console.log('First')
        tempColors[colorIndex] = color;
      } else {
        tempColors.push(color);
      }
      setColors(tempColors);
    }
setUpdatingColors(false);
  }, [route.params]);

  useEffect(() => {
    console.log('Colors Updated');
  }, [colors]);

  const SampleFunction=()=>{
    navigation.navigate('AddColorScreen');
}

const onRefresh = () => {
  setIsFetching(!isFetching)
};

  return (
    <View style={styles.MainContainer}>
      {!updatingColors && <View>
        <FlatG colors={colors}/>
        <IconButton onPress={SampleFunction} />
      </View>}
      </View>
  );
}

export default HomeScreen;  

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#31A8A8'
  },
 
  TouchableOpacityStyle:{

    position: 'absolute',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    right: 32,
    bottom: 32,
    backgroundColor: '#009688',
    borderRadius: 25,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'cover',
    width: 24,
    height: 24,
  }
}); 