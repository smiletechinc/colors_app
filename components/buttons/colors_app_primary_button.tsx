import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

type PrimaryButtonProps = {
  title: string;
  onPress: any;
}
const PrimaryButton:React.FunctionComponent<PrimaryButtonProps>  = (props ) => {
  const {title, onPress} = props;
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