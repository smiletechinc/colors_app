import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const PrimaryButton = ( {title, onPress} ) => {
    return(
     <View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.primaryButtonContainer}>
                <Text style={{color: "#000000"}}>{title}</Text>
            </View>
        </TouchableOpacity> 
    </View> 
    )
}

const styles = StyleSheet.create({
  primaryButtonContainer: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#009688",
    marginLeft:50,
  },
});

export default PrimaryButton;