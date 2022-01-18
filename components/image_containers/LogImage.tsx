import React from "react";
import {View, StyleSheet, Image} from 'react-native';
import {styles} from './index';

const LogImage = () => {
    return(
        <View style={styles.container}>
       <Image source={require('../../resources/images/Icon-App.png')}
       style={styles.LogImage} />
    </View>
    )
}


export default LogImage;