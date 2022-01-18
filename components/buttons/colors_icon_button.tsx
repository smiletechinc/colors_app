import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import {styles} from './index';

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

export default IconButton;