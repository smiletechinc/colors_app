import {useCallback, useEffect, useState} from 'react';
// import Clipboard from '@react-native-clipboard/clipboard';

interface Props {
  arabictext: any;
}

export const ConversionHexRGBA = () => {
  const [hexCode, setHexCode] = useState('#000000');
  const [redSlider, setRedSliderValue] = useState(0);
  const [greenSlider, setGreenSliderValue] = useState(0);
  const [blueSlider, setBlueSliderValue] = useState(0);

  const convertSingleCode = colorCode => {
    let tempHexCode = colorCode.toString(16);
    return tempHexCode.length == 1 ? '0' + tempHexCode : tempHexCode;
  };

  const rgbToHex = (redSlider, greenSlider, blueSlider) => {
    if (isNaN(redSlider) || isNaN(greenSlider) || isNaN(blueSlider)) {
      alert('Incorrect RGB Color Code!!!');
      return;
    } else {
      setHexCode(
        '#' +
          convertSingleCode(redSlider) +
          convertSingleCode(greenSlider) +
          convertSingleCode(blueSlider),
      );
    }
  };

  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    setRedSliderValue(r);
    setGreenSliderValue(g);
    setBlueSliderValue(b);
  };

  return {
    hex2rgba,
    rgbToHex,
    hexCode,
    redSlider,
    greenSlider,
    blueSlider,
    setRedSliderValue,
    setGreenSliderValue,
    setBlueSliderValue,
    setHexCode,
  };
};
