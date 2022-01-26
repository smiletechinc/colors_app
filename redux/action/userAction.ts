import { act } from 'react-test-renderer';
import * as actionTypes from './actionTypes';

export const userstatus = (userSession:UserObject) => {
    console.log("useraction called");
  return {
    type: actionTypes.USER_LOGIN,
    userSession,
  }
}
