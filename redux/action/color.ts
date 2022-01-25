import * as actionTypes from './actionTypes';

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

export const deleteColor = (color: Color) => {
  return {
    type: actionTypes.DELETE_COLOR,
    color,
  }
}
