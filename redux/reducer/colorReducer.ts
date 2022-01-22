import * as actionTypes from '../action/actionTypes'
const initialState: ColorState = {
    colors: [  
        {   id: Math.random(),
            name: "TURQUOISE", 
            code: "#1abc9c" 
        },
        {   id: Math.random(),
            name: "EMERALD", 
            code: "#2ecc71" 
        },
        {
          id: Math.random(),
            name: "ASBESTOS", 
            code: "#7f8c8d" 
        }
      ]
}

const colorReducer = (state: ColorState = initialState, action: ColorAction): ColorState => {
  // console.log('indise reducer.', JSON.stringify(action));
  switch(action.type) {
    case actionTypes.ADD_COLOR:
      console.log('Adding color.', action)
      console.log(action.color.id)
        const newColor: Color = {
            id: action.color.id,
            name: action.color.name,
            code: action.color.code
        }
      return {
        ...state,
        colors: state.colors.concat(newColor)
      };
    case actionTypes.UPDATE_COLOR:
      console.log('Updating colors:', JSON.stringify(state.colors));
      console.log('Updated color:', JSON.stringify(action.color));
      // const updatedColors: Colors = state.colors.filter(
      //   color =>color.id === action.newColor.id
      // )
      const objIndex = state.colors.findIndex((colors => colors.id == action.color.id));
console.log('index: ', objIndex);
let colors = state.colors;
colors[objIndex] = action.color;
console.log('Updated colors:', JSON.stringify(colors));
      return {
        ...state,
        colors: colors,
      };
    default:
      return state;
  }
}

export default colorReducer;