import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";
import {styles} from './index'

type Input = {
  placeholder: string;
  onChangeText: any;
  defaultValue: any;
  secureTextEntry?: boolean;
  keyboardType?: any;
  error?: string;
  foucs?: boolean;
}
const AppTextInput:React.FunctionComponent<Input> = ( props ) => {
  const {placeholder, onChangeText, defaultValue, secureTextEntry, keyboardType, error, foucs} = props;

    return(
     <View style={styles.container}>
        <View style={[styles.inputView, {borderColor: error?.trim().length != 0 ? '#ff0f0f' : '#98d3d3'}]}> 
        <TextInput
                style={styles.TextInput}
                placeholder={placeholder}
                onChangeText={onChangeText}
                defaultValue={defaultValue}
                secureTextEntry={secureTextEntry}
                keyboardType = {keyboardType}
            />
        </View>
        {error !== '' && <Text style={styles.errorText}>{error}</Text>}
    </View> 
    )
}

export default AppTextInput;