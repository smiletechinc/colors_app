import { db, app } from './../config/db';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

export const addColorService = (color:Color, onSuccess?:any, onFailure?:any) => {
    const branch = `/colors/${color.id}`
    console.log('Branch: ', branch)
    if (db) {
        set(ref(db, branch), color)
        .then(() => {
        // Signed in
        onSuccess();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        onFailure(error);
      });
    } else {
      const error:ErrorObject = {
      message: 'Something went wrong while executing your request'
    }
    onFailure(error);
  }
}

export const fetchColorsService = (onSuccess?:any, onFailure?:any) => {
  const branch = 'colors';
  console.log('Branch: ', branch)
  if (db) {
    const dbRef = ref(getDatabase());
    get(ref(db, branch)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        onSuccess(snapshot.val());
      } else {
        console.log("No data available");
        const error:ErrorObject = {
          code:'404',
          message: 'No data available'
        }
        onFailure(error);
      }
    }).catch((error) => {
      console.error(error);
      onFailure(error);
    });
  } else {
    const error:ErrorObject = {
    message: 'Something went wrong while executing your request'
  }
  onFailure(error);
}
}
