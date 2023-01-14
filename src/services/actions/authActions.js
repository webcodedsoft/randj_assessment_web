// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   getAuth
// } from "firebase/auth";
// import { getFirestore, doc, setDoc } from "@firebase/firestore";
// import { firestore } from "../../config/fbConfig";

// const db = getFirestore();
// const auth = getAuth();

// export const signIn = (credentials) => {
//   return (dispatch, getState) => {
    
//     signInWithEmailAndPassword(
//       auth,
//       credentials.email,
//       credentials.password
//     ).then(() => {
//       dispatch({ type: 'LOGIN_SUCCESS' });
//     }).catch((err) => {
//       dispatch({ type: 'LOGIN_ERROR', err });
//     });

//   }
// }

// export const logOut = () => {
//   return (dispatch, getState) => {
//     signOut().then(() => {
//       dispatch({ type: 'SIGNOUT_SUCCESS' })
//     });
//   }
// }

// export const signUp = (newUser) => {
//   return async (dispatch, getState) => {
//     console.log(firestore)
//     const otp = Math.floor(1000 + Math.random() * 9000)
//     try {
//         const userCredential = await createUserWithEmailAndPassword(
//            auth,
//            newUser.email, 
//           newUser.password
//           );
//       const user = userCredential.user;
//       const dbRef = doc(db, "users", (user || {}).uid);
//       await setDoc(dbRef, {
//         name: newUser.name,
//         isVerified: false,
//         otp: otp,
//         email: newUser.email,
//       })
//       dispatch({ type: 'SIGNUP_SUCCESS' });
//     } catch (err) {
//       dispatch({ type: 'SIGNUP_ERROR', err});
//     }
   
//   }
// }