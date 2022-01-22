import React, { FunctionComponent, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import styles from "./grid_style";
import {AddColorScreen} from '../../screens/index';
import { PrimaryButton } from '../buttons';
import { useNavigation } from '@react-navigation/native';

// import {Colors} from './../../type';

type Props = {
  colors: any;
}

const FlatG: FunctionComponent<Props> = (props) =>  {
  const navigation = useNavigation();
  const {colors} = props
  
 const moveitem = (item, index) => {
    navigation.navigate('AddColorScreen', {
     item : {
     name: item.name,
     code: item.code,
   },
   options:{title:"Edit Color"},
   type:"EditColor",
   colorIndex: index,
  });
 }
  
  return (    

    <FlatGrid
      itemDimension={100}
      data={colors}
      style={styles.gridView}
      // keyExtractor={(item) => item.id.toString()}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item, index }) => (
        <TouchableOpacity onPress={()=>moveitem(item, index)}>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        </TouchableOpacity> 
      )}
    />
  );
}

export default FlatG;