import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { styles } from './index'

type Props = {
    color: Color;
    onPress: any;
}

const ListItem: React.FunctionComponent<Props>= (props) => {
const {color, onPress} = props;
 
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.itemContainer, { backgroundColor: color.code }]}>
          <Text style={styles.itemName}>{color.name}</Text>
          <Text style={styles.itemCode}>{color.code}</Text>
        </View>
      </TouchableOpacity> 
    );
}

export default ListItem;
