import { act } from 'react-test-renderer'
import { AnyAction } from 'redux'
import * as actionTypes from '../action/actionTypes'

const initialState: ColorState = {
    colors: [  
        {   createdBy: 'null',
            id: Math.random(),
            name: "TURQUOISE", 
            code: "#1abc9c" 
        },
        {  createdBy: 'null', 
           id: Math.random(),
            name: "EMERALD", 
            code: "#2ecc71" 
        },
        {
          createdBy: 'null',
          id: Math.random(),
            name: "ASBESTOS", 
            code: "#7f8c8d" 
        }
      ]
}

const colorReducer = (state: ColorState = initialState, action: AnyAction): ColorState => {
  switch(action.type) {
    case actionTypes.ADD_COLOR:
        const newColor: Color = {
            createdBy: action.color.createdBy,
            id: action.color.id,
            name: action.color.name,
            code: action.color.code
        }
      return {
        ...state,
        colors: state.colors.concat(newColor)
      };
    case actionTypes.UPDATE_COLOR:
      console.log("updateCOlor reducer called");

      const objIndex = state.colors.findIndex((colors => colors.id == action.color.id));
      let colors = state.colors;
      colors[objIndex] = action.color;
      return {
        ...state,
        colors: colors,
      };
      case actionTypes.UPDATE_COLORS:
        console.log("updateCOlor reducer called", action.colors);
        return {
          ...state,
          colors: action.colors,
        };
      case actionTypes.DELETE_COLOR:
        const deleteCo: Color[] = state.colors.filter(
          color=> color.id != action.color.id
        )
        return {
          ...state,
          colors: deleteCo,
        }
    default:
      return state;
  }
}

export default colorReducer;