import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
import { IconButton } from '../components/buttons';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatG } from '../components/grid';
import AddColorScreen from './colors_add_color_screen';
import { FlatGrid } from 'react-native-super-grid';
import {dummyColors} from '../resources/dummy_data/dummy_colors';
// import { Colors } from 'types';
import {styles} from './index';

type Props = {
  navigation: any;
  route: any;
  reduxColors: Colors;
}

const HomeScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation, route, reduxColors} = props;
  const [isFetching, setIsFetching] = useState(false);
  const [colors, setColors] = useState<Colors>(dummyColors);
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
    <View style={styles.container}>
      {!updatingColors && <View>
        <FlatG colors={colors}/>
        <IconButton onPress={SampleFunction} />
      </View>}
      </View>
  );
}

export default HomeScreen;  