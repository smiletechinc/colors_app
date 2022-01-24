import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import {styles} from './index';


type SecondaryButtonProps = {
    title: string;
    onPress: any;
}
const SecondaryButton: React.FunctionComponent<SecondaryButtonProps> = (  props  ) => {
    const {title, onPress} = props;
    return(
     <View>
        <TouchableOpacity onPress={onPress}>
            <View style={styles.secondaryButtonContainer}>
                <Text style={styles.secondaryButtonText}>{title}</Text>
            </View>
        </TouchableOpacity> 
    </View> 
    )
}

export default SecondaryButton;