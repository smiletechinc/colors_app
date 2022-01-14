import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from "react-native";

type IconButtonProps = {
  onPress: any;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ( props ) => {
  const {onPress} = props;

    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.iconButtonContainer} >
          <Image source={require('../../resources/images/icon_plus.png')}
                 style={styles.icon} /> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconButtonContainer:{
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
      icon: {
        resizeMode: 'cover',
        width: 24,
        height: 24,
      }
});

export default IconButton;