import { User } from 'firebase/auth'
import { act } from 'react-test-renderer'
import { AnyAction } from 'redux'
import * as actionTypes from '../action/actionTypes'

const initialState: UserState = {
    authUser:  
        {   
            id: "null",
            email: "null", 
            name: "null" 
        },
}

const userReducer = (state: UserState = initialState, action: AnyAction): UserState =>  {
    console.log()
    switch(action.type) {
        case actionTypes.USER_LOGIN:
            const newUser: UserObject = {
                id: action.userSession.id,
                email: action.userSession.email,
                name: action.userSession.name
            }
          return {
            ...state,
            authUser: newUser
          };
        default: {
            return state
        }
    }
}

export default userReducer;