import { act } from 'react-test-renderer';
import * as actionTypes from './actionTypes';
import { fetchColorsService, addColorService} from '../../services/colorsServices';
// import { useDispatch } from 'react-redux';

// const dispatch = useDispatch();

export const addColor = (color: Color) => {
  console.log('Adding a new Color', color);
  return {
    type: actionTypes.ADD_COLOR,
    color,
  }
}

export const updateColor = (color: Color) => {
  return {
    type: actionTypes.UPDATE_COLOR,
    color,
  }
}

export const updateReduxColors = (colors:Colors) => {

  console.log("updated colors called", JSON.stringify(colors));
  
  return {
    type: actionTypes.UPDATE_COLORS,
    colors,
  }
}

export const updateColors = () => {

  let colors: Colors = [];
  console.log("updated colors called");
  
  // const fetchColorsSuccessFailure = (colorsError) => {
  //   console.log('colorsError: ', colorsError);
  //   dispatch(updateReduxColors(colors));

  // }

  // const fetchColorsSuccess = (colorsData) => {
  //   //1. Update redux for colors from firebase
  //   //2. Navigate to home
  //   console.log('colorsData:', Object.values(colorsData));
  //   colors = Object.values(colorsData);
  //   console.log("colors ", colors);
  //   dispatch(updateReduxColors(colors));

  // }

  // fetchColorsService(fetchColorsSuccess, fetchColorsSuccessFailure)  //call reducrer action

  // dispatch(updateReduxColors(colors));
  return {
    type: actionTypes.UPDATE_COLORS,
    colors,
  } 
}

export const deleteColor = (color: Color) => {
  return {
    type: actionTypes.DELETE_COLOR,
    color,
  }
}
