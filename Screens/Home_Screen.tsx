import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
import { IconButton } from './../components/buttons';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlatG from './../components/grid/FlatG';
import AddColorScreen from './Add_Color';
import { FlatGrid } from 'react-native-super-grid';
import {dummyColors} from '../resources/files/dummy_data/dummy_colors';
// import { Colors } from 'types';

type Props = {
  navigation: any;
  route: any;
}

const HomeScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation, route} = props;

  const [isFetching, setIsFetching] = useState(false);
  const [colors, setColors] = useState<Colors>(dummyColors);
  // const [colors, setColors] = useState([  
  //   { name: 'TURQUOISE', code: '#1abc9c' },
  //   { name: 'EMERALD', code: '#2ecc71' },
  //   { name: 'PETER RIVER', code: '#3498db' },
  //   { name: 'AMETHYST', code: '#9b59b6' },
  //   { name: 'WET ASPHALT', code: '#34495e' },
  //   { name: 'GREEN SEA', code: '#16a085' },
  //   { name: 'NEPHRITIS', code: '#27ae60' },
  //   { name: 'BELIZE HOLE', code: '#2980b9' },
  //   { name: 'WISTERIA', code: '#8e44ad' },
  //   { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
  //   { name: 'SUN FLOWER', code: '#f1c40f' },
  //   { name: 'CARROT', code: '#e67e22' },
  //   { name: 'ALIZARIN', code: '#e74c3c' },
  //   { name: 'CLOUDS', code: '#ecf0f1' },
  //   { name: 'CONCRETE', code: '#95a5a6' },
  //   { name: 'ORANGE', code: '#f39c12' },
  //   { name: 'PUMPKIN', code: '#d35400' },
  //   { name: 'POMEGRANATE', code: '#c0392b' },
  //   { name: 'SILVER', code: '#bdc3c7' },
  //   { name: 'ASBESTOS', code: '#7f8c8d' },
  // ]);
  const [total, setTotal] = useState(dummyColors.length);

useEffect(() => {
  console.log('dummyColors: ', dummyColors);
}, [colors]);

  useEffect(() => {
console.log('total');
  }, [total]);

  useEffect(() => {
    if(route.params) {
      const { color } = route.params;
      console.log('Params: ', route.params);
      let tempColors = colors;
      tempColors.push(color);
      setColors(tempColors);
      setTotal(tempColors.length);
    }
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
          <FlatG colors={colors}/>
          <IconButton  onPress={SampleFunction} />
        {/* <TouchableOpacity activeOpacity={0.5} onPress={SampleFunction} style={styles.TouchableOpacityStyle} >
          <Image source={require('../resources/images/icon_plus.png')}
                 style={styles.FloatingButtonStyle} /> 
        </TouchableOpacity> */}
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