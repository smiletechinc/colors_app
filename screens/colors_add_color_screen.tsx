import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, Alert, Button} from 'react-native';
import Slider from '@react-native-community/slider';
import { NavigationContainer } from '@react-navigation/native';
import { PrimaryButton } from '../components/buttons';
import AppTextInput from '../components/inputs/colors_app_textinput';
import {styles} from './index';

const AddColorScreen = ( {navigation } ) => {

  const [redSlider, setRedSliderValue] = useState(0);
  const [greenSlider, setGreenSliderValue] = useState(0);
  const [blueSlider, setBlueSliderValue] = useState(0);
  const [hexCode, setHexCode] = useState('#151515');
  const [colorName, setColorName] = useState('');
  const [errorV, setErrorV] = useState('');

  const convertSingleCode = ( colorCode ) => { 
    let tempHexCode = colorCode.toString(16); 
    return (tempHexCode.length == 1) ? ('0' + tempHexCode) : tempHexCode; 
  } 

  const rgbToHex = ( redSlider, greenSlider, blueSlider ) => { 
    if( isNaN( redSlider ) || isNaN( greenSlider ) || isNaN( blueSlider ) ) 
    { alert('Incorrect RGB Color Code!!!'); 
    return; 
    } 
    else { 
       setHexCode ( '#' + convertSingleCode(redSlider) + convertSingleCode(greenSlider) + 
      convertSingleCode(blueSlider)) 
    } 
  }

  const updateHexValue = () => {
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
      <View style={styles.addColorcontainer}>
        <View style={styles.sliderview}>
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
          // redSlider={redSlider}
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
          // greenSlider={greenSlider}
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
          // blueSlider={blueSlider}
        />
          <Text style = { styles.slidertext }>
        RGB: rgb({ redSlider }, { greenSlider }, { blueSlider })
        </Text> 
        <Text style = { styles.slidertext}> 
        HEX: { hexCode }
        </Text>
        <Text style={styles.slidertext}> 
            Give Value in RGB
        </Text>
        <View>
        <AppTextInput 
        placeholder="Red (0 to 255)" 
        onChangeText={(text) => {text !== '' && text !== null && text !== undefined && setRedSliderValue(Number(text))}} 
        keyboardType={'numeric'} 
        defaultValue={String(redSlider)} 
        error={errorV}
        />
        </View>
        <View>
        <AppTextInput 
        placeholder="Green (0 to 255)" 
        onChangeText={(text) => {text !== '' && text !== null && text !== undefined && setGreenSliderValue(Number(text))}} 
        keyboardType={'numeric'} 
        defaultValue={String(greenSlider)} 
        error={errorV}
        />
        </View>
        <View>
        <AppTextInput 
        placeholder="Blue (0 to 255)" 
        onChangeText={(text) => {text !== '' && text !== null && text !== undefined && setBlueSliderValue(Number(text))}} 
        keyboardType={'numeric'} 
        defaultValue={String(blueSlider)} 
        error={errorV}
        />
      </View>
        <View>
        <AppTextInput placeholder="Add Color Name" onChangeText={text => setColorName(text)} defaultValue={colorName} error={errorV}/>
        </View>
        <PrimaryButton 
          title='Add Color'
         onPress={colorBookmark}
       />

      </View>
    </SafeAreaView>
  );
};



export default AddColorScreen;


 
