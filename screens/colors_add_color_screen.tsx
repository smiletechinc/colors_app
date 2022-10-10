import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import {PrimaryButton, SecondaryButton} from '../components/buttons';
import AppTextInput from '../components/inputs/colors_app_textinput';
import {connect} from 'react-redux';
import {addColor, deleteColor, updateColor} from '../redux/action/colorAction';
import {Dispatch} from 'redux';
import {useDispatch} from 'react-redux';
import {
  addColorService,
  deleteColorService,
  getIdForNewColor,
} from './../services/colorsServices';
import {ConversionHexRGBA} from '../src/hooks/hexRgbaConver';

const AddColorScreen = props => {
  const {navigation, route, add} = props;
  const dispatch: Dispatch<any> = useDispatch();
  const [colorName, setColorName] = useState('');
  const [errorV, setErrorV] = useState('');
  const [type, setType] = useState(route && route.params && route.params.type);
  const [createdID, setCreatedID] = useState('');
  const [colorID, setCOlorID] = useState(0);
  const {
    redSlider,
    greenSlider,
    blueSlider,
    setRedSliderValue,
    setGreenSliderValue,
    setBlueSliderValue,
    hexCode,
    setHexCode,
    hex2rgba,
    rgbToHex,
  } = ConversionHexRGBA();

  useEffect(() => {
    if (type && type === 'EditColor') {
      navigation.setOptions({title: 'Edit Color'});
    } else {
      navigation.setOptions({title: 'Add Color'});
    }
  }, [navigation]);

  useEffect(() => {
    if (type && type == 'EditColor') {
      setColorName(route.params.item.name);
      setHexCode(route.params.item.code);
      console.log(route.params.item.id);
      hex2rgba(route.params.item.code, 1);
    } else {
      setCreatedID('dfgh');
      setColorName('');
    }
  }, [route && route.params]);

  useEffect(() => {
    if (redSlider || greenSlider || blueSlider) {
      console.log('redSlider', redSlider);
      console.log('greenSlider', greenSlider);
      console.log('blueSlider', blueSlider);
      rgbToHex(redSlider, greenSlider, blueSlider);
      console.log('hex', hexCode);
    }
  }, [redSlider, greenSlider, blueSlider]);

  const goToHomeSceen = () => {
    navigation.navigate('HomeScreen');
  };

  const authenticationSuccess = (user?: any) => {
    console.log('Signup: ', JSON.stringify(user));
    if (user) {
      Alert.alert('ColorsApp', `You've signed up successfully.`);
      goToHomeSceen();
    }
  };

  const authenticationFailure = error => {
    if (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert('ColorsApp', errorMessage);
    }
  };

  const proceedToAddColor = () => {
    const keygenrator = getIdForNewColor();
    console.log('keygenerator:', keygenrator);
    const color: Color = {
      createdBy: createdID,
      id: colorID,
      name: colorName,
      code: hexCode,
    };
    addColorService(color, authenticationSuccess, authenticationFailure); // Async function
  };

  const proceedToDeleteColor = () => {
    const keygenrator = getIdForNewColor();
    console.log('keygenerator:', keygenrator);
    const color: Color = {
      createdBy: createdID,
      id: colorID,
      name: colorName,
      code: hexCode,
    };
    deleteColorService(
      route.params.item.id,
      authenticationSuccess,
      authenticationFailure,
    ); // Async function
  };

  const colorBookmark = () => {
    if (type && type === 'EditColor') {
      const color: Color = {
        createdBy: 'null',
        id: route.params.item.id,
        name: colorName,
        code: hexCode,
      };
      proceedToAddColor();
      dispatch(updateColor(color));
      navigation.navigate('HomeScreen');
    } else {
      const cid = Math.floor(Math.random() * 10);
      setCOlorID(cid);
      proceedToAddColor();
      const color: Color = {
        createdBy: createdID,
        id: colorID,
        name: colorName,
        code: hexCode,
      };
      add(color);
      navigation.navigate('HomeScreen');
    }
  };

  const DeleteColor = () => {
    const color: Color = {
      createdBy: 'null',
      id: route.params.item.id,
      name: colorName,
      code: hexCode,
    };
    proceedToDeleteColor();
    dispatch(deleteColor(color));
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: `rgb(${redSlider},${greenSlider},${blueSlider})`,
              width: 96,
              height: 72,
            }}></View>
        </View>

        {/*Slider with max, min, step and initial value*/}
        <Slider
          maximumValue={255}
          minimumValue={0}
          minimumTrackTintColor={`rgb(${redSlider}, 0, 0)`}
          maximumTrackTintColor="#98d3d3"
          step={1}
          value={redSlider}
          onValueChange={sliderValue => setRedSliderValue(sliderValue)}
          //redSlider={redSlider}
        />

        <Slider
          maximumValue={255}
          minimumValue={0}
          minimumTrackTintColor={`rgb(0, ${greenSlider}, 0)`}
          maximumTrackTintColor="#98d3d3"
          step={1}
          value={greenSlider}
          onValueChange={sliderValue => setGreenSliderValue(sliderValue)}
          //greenSlider={greenSlider}
        />
        <Slider
          maximumValue={255}
          minimumValue={0}
          minimumTrackTintColor={`rgb(0,0,${blueSlider})`}
          maximumTrackTintColor="#98d3d3"
          step={1}
          value={blueSlider}
          onValueChange={sliderValue => setBlueSliderValue(sliderValue)}
          // blueSlider={String(blueSlider)}
        />
        <Text style={styles.text}>
          RGB: rgb({redSlider}, {greenSlider}, {blueSlider})
        </Text>
        <Text style={styles.text}>HEX: {hexCode}</Text>
        <Text style={styles.text}>Give Value in RGB</Text>
        <View>
          <AppTextInput
            placeholder="Red (0 to 255)"
            onChangeText={text => {
              text !== '' &&
                text !== null &&
                text !== undefined &&
                setRedSliderValue(Number(text));
            }}
            keyboardType={'numeric'}
            defaultValue={String(redSlider)}
            error={errorV}
          />
        </View>
        <View>
          <AppTextInput
            placeholder="Green (0 to 255)"
            onChangeText={text => {
              text !== '' &&
                text !== null &&
                text !== undefined &&
                setGreenSliderValue(Number(text));
            }}
            keyboardType={'numeric'}
            defaultValue={String(greenSlider)}
            error={errorV}
          />
        </View>
        <View>
          <AppTextInput
            placeholder="Blue (0 to 255)"
            onChangeText={text => {
              text !== '' &&
                text !== null &&
                text !== undefined &&
                setBlueSliderValue(Number(text));
            }}
            keyboardType={'numeric'}
            defaultValue={String(blueSlider)}
            error={errorV}
          />
        </View>
        <View>
          <AppTextInput
            placeholder="Add Color Name"
            onChangeText={text => setColorName(text)}
            defaultValue={colorName}
            error={errorV}
          />
        </View>
        <PrimaryButton
          title={type && type === 'EditColor' ? 'Update Color' : 'Add Color'}
          onPress={colorBookmark}
        />
        {type && type === 'EditColor' && (
          <SecondaryButton title={'Delete Color'} onPress={DeleteColor} />
        )}
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = dispatch => {
  console.log('Adding a value && Dispatch is Called');
  return {
    add: color => {
      dispatch(addColor(color));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddColorScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#31A8A8',
  },
  inputView: {
    backgroundColor: '#98d3d3',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 50,
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
    width: '70%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#009688',
    marginLeft: 50,
  },
});
