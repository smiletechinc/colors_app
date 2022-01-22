import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, StyleSheet, Button, Alert, TouchableOpacity, Image} from 'react-native';
import { IconButton } from '../components/buttons';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FlatG } from '../components/grid';
import AddColorScreen from './colors_add_color_screen';
import { FlatGrid } from 'react-native-super-grid';
import {dummyColors} from '../resources/dummy_data/dummy_colors';
import {styles} from './index';
import { connect, useDispatch } from 'react-redux';
import { addColor } from '../redux/action/color';
import ListItem from '../components/grid/list_item';
import {useTypedSelector} from './../redux/states'
const PlusIcon = require("../resources/images/icon_plus.png");

type Props = {
  navigation: any;
  route: any;
  reduxColors: any;
  updated: boolean;
}

let updatedOuter = false;

const HomeScreen: React.FunctionComponent<Props> = (props) => {
  const {navigation, route, reduxColors, updated} = props;
  
  const [isFetching, setIsFetching] = useState(false);
  const [colors, setColors] = useState(reduxColors);
  const [updatingColors, setUpdatingColors] = useState<boolean>(false);
  const [selectedID, setSelectedID] = useState();

  // const routingLoaded = useTypedSelector(state => state.routing.colors);

  useEffect(() => {
    setColors(reduxColors);
    updatedOuter = updated;
  }, [updated, reduxColors]);

  // useEffect(()=>{
  //   console.log("routeParams: ", route.params);
  // }, [route.params]);

//   useEffect(() => {
//     setUpdatingColors(true);
//     if(route.params) {
//       const { color, colorIndex } = route.params;
//       console.log('Params: ',  route.params);
//      // let tempColors = colors;
//       console.log('Color index:', colorIndex);
//       if (colorIndex) {
//         console.log('First')
//         tempColors[colorIndex] = color;
//       } else {
//         tempColors.push(color);
//       }
//       setColors(tempColors);
//     }
// setUpdatingColors(false);
//   }, [route.params]);

//   useEffect(() => {
//     console.log('Colors Updated');
//   }, [colors]);

  const SampleFunction=()=>{
    navigation.navigate('AddColorScreen');
}
 
const moveitem = (item) => {
   console.log("ColorID:", item.id);
   setSelectedID(item.id);
   console.log("selectedid is :",selectedID);
  navigation.navigate('AddColorScreen', {
   item : {
    id: item.id,
   name: item.name,
   code: item.code,
 },
 options:{title:"Edit Color"},
 type:"EditColor",
});
}

const onRefresh = () => {
  setIsFetching(!isFetching)
};

const renderItem = ({item}) => {
  if(item.id===selectedID){
    return (
      <ListItem 
      color = {item}
      onPress = {() => moveitem(item)}
    />
    )
  }
  else {
    return(
      <ListItem 
           color = {item}
           onPress = {() => moveitem(item)}
         />
    )
  }
}
  return (
    <View style={styles.container}>
      <View>
        {/* <FlatG colors={colors}/> */}
        <FlatList style = { styles.listContainer }
       data = { colors }
       keyExtractor={(item, index) => index.toString()}
       extraData={selectedID}
       renderItem = {renderItem}
     />
   
        <IconButton onPress={SampleFunction} icon={PlusIcon} />
      </View>
      </View>
  );
}

  const mapStateToProps = state => {
  console.log("Redux props are comes:", JSON.stringify(state.colors.colors));
  return {
    reduxColors: state.colors.colors,
    updated: !updatedOuter,
  }
}

export default connect(mapStateToProps)(HomeScreen);

