import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import styles from "./grid_style";
// import {Colors} from './../../type';

type Props = {
  colors: any;
}

const FlatG: FunctionComponent<Props> = (props) =>  {
  const {colors} = props

return (    

    <FlatGrid
      itemDimension={100}
      data={colors}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
          
        </View>
      )}
    />
  );
}

export default FlatG;