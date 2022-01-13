import React, {useEffect, useState} from 'react';


//import all the components we are going to use
import {View, Text, SafeAreaView, StyleSheet, TextInput, Alert, Button} from 'react-native';

import Slider from '@react-native-community/slider';
import { NavigationContainer } from '@react-navigation/native';

import { PrimaryButton } from '../components/buttons/colors_buttons';
import AppTextInput from '../components/inputs/colors_app_textinput';
const Add_Color = ( {navigation } ) => {

  const [redSlider, setRedSliderValue] = useState(15);
  const [greenSlider, setGreenSliderValue] = useState(15);
  const [blueSlider, setBlueSliderValue] = useState(15);
  const [hexCode, setHexCode] = useState('#151515');
  const [colorName, setColorName] = useState('');
 

  convertSingleCode = ( colorCode ) => { 
    let tempHexCode = colorCode.toString(16); 
    return (tempHexCode.length == 1) ? ('0' + tempHexCode) : tempHexCode; 
  } 
  rgbToHex = ( redSlider, greenSlider, blueSlider ) => { 
    if( isNaN( redSlider ) || isNaN( greenSlider ) || isNaN( blueSlider ) ) 
    { alert('Incorrect RGB Color Code!!!'); 
    return; 
    } 
    else { 
       setHexCode ( '#' + convertSingleCode(redSlider) + convertSingleCode(greenSlider) + 
      convertSingleCode(blueSlider)) 
    } 
  }
  updateHexValue = () => {
    rgbToHex(redSlider, greenSlider,blueSlider)
  }

  useEffect(() => {
    updateHexValue();
  }, [redSlider, greenSlider, blueSlider]);

  const colorBookmark = () => {
  navigation.navigate('HomeScreen', {
    color : {
      name: colorName,
      code: hexCode,
    }
  });

  
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <View style={{backgroundColor:`rgb(${redSlider},${greenSlider},${blueSlider})`, width: 96, height: 72}}>
            </View> 
        </View>
        
        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={255}
          minimumValue={0}
          minimumTrackTintColor={`rgb(${redSlider}, 0, 0)`}
          maximumTrackTintColor='#98d3d3'
          step={1}
          value={0}
          onValueChange={
            (sliderValue) => setRedSliderValue(sliderValue)
          }
          redSlider={redSlider}
        />
        
        <Slider
          maximumValue={255}
          minimumValue={0}
          minimumTrackTintColor={`rgb(0, ${greenSlider}, 0)`}
          maximumTrackTintColor='#98d3d3'
          step={1}
          value={0}
          onValueChange={
            (sliderValue) => setGreenSliderValue(sliderValue)
          }
          greenSlider={greenSlider}
        />
        <Slider
          maximumValue={255}
          minimumValue={0}
          minimumTrackTintColor={`rgb(0,0,${blueSlider})`}
          maximumTrackTintColor='#98d3d3'
          step={1}
          value={0}
          onValueChange={
            (sliderValue) => setBlueSliderValue(sliderValue)
          }
          blueSlider={blueSlider}
        />
          <Text style = { styles.text }>
        RGB: rgb({ redSlider }, { greenSlider }, { blueSlider })
        </Text> 
        <Text style = { styles.text}> 
        HEX: { hexCode }
        </Text>
        <Text style={styles.text}> 
            Give Value in RGB
        </Text>
        <View>
        <AppTextInput 
        placeholder="Red (0 to 255)" 
        onChangeText={(text) => {text !== '' && text !== null && text !== undefined && setRedSliderValue(Number(text))}} 
        keyboardType={'numeric'} 
        defaultValue={String(redSlider)} 
        />
        </View>
        <View>
        <AppTextInput 
        placeholder="Green (0 to 255)" 
        onChangeText={(text) => {text !== '' && text !== null && text !== undefined && setGreenSliderValue(Number(text))}} 
        keyboardType={'numeric'} 
        defaultValue={String(greenSlider)} 
        />
        </View>
        <View>
        <AppTextInput 
        placeholder="Blue (0 to 255)" 
        onChangeText={(text) => {text !== '' && text !== null && text !== undefined && setBlueSliderValue(Number(text))}} 
        keyboardType={'numeric'} 
        defaultValue={String(blueSlider)} 
        />
      </View>
        <View>
        <AppTextInput placeholder="Add Color Name" onChangeText={text => setColorName(text)} defaultValue={colorName} />
        </View>
        <PrimaryButton 
          title='Add Color'
         onPress={colorBookmark}
       />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#31A8A8',
  },
  inputView: {
    backgroundColor: "#98d3d3",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50
  },
  text: {
    marginTop: 10,
    fontSize: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 80,
    marginBottom: 10,
  },

  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#009688",
    marginLeft: 50
  },
});

export default Add_Color;


 
