import { db, app } from './../config/db';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set, get, child } from "firebase/database";

export const signInService = (authObject:AuthObject, onSuccess?:any,onFailure?:any) => {
    const {email, password} = authObject;
    if (app) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('User: ', JSON.stringify(userCredential));
    onSuccess(user);
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

export const signUpService = (authObject:AuthObject, onSuccess?:any,onFailure?:any) => {
    const {email, password} = authObject;
    if (app) {
    const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
     console.log('User: ', JSON.stringify(userCredential));
    onSuccess(user);
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

export const resetPasswordService = (email:string, onSuccess?:any, onFailure?:any) => {
    console.log('Sending...')
    if (app) {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
    .then((user) => {
    // Signed in
    onSuccess(user);
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

export const registerUserService = (userObject:UserObject, onSuccess?:any, onFailure?:any) => {
    const branch = `/users/${userObject.id}`
    console.log('Branch: ', branch)
    if (db) {
        set(ref(db, branch), userObject)
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

export const fetchColorsService = (color:Color, onSuccess?:any, onFailure?:any) => {
  const branch = 'colors';
  console.log('Branch: ', branch)
  if (db) {
    // const dbRef = ref(getDatabase());
    get(child(db, `/${branch}`)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  } else {
    const error:ErrorObject = {
    message: 'Something went wrong while executing your request'
  }
  onFailure(error);
}
}
