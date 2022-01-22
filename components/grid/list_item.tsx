import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
          <Text style={styles.itemCode}>{color.id}</Text>
        </View>
      </TouchableOpacity> 
    );
}

export default ListItem;

const styles = StyleSheet.create({
    itemContainer: {
      borderStyle: "solid",
      justifyContent: 'flex-end',
      borderRadius: 5,
      marginLeft: 32,
      marginTop: 8,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });
  