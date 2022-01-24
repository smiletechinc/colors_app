import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { styles } from './index';

type IconButtonProps = {
  onPress: any;
  icon: ImageSourcePropType;
}

const IconButton: React.FunctionComponent<IconButtonProps> = ( props ) => {
  const {onPress, icon} = props;

    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={styles.iconButtonContainer} >
          <Image source={icon}
                 style={styles.icon} /> 
        </TouchableOpacity>
    )
}

export default IconButton;