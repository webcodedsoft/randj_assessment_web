import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth
} from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, query, where, getDocs, collection } from "@firebase/firestore";
import app from '../config/fbConfig';
import { toast } from "react-toastify";

export const auth = getAuth(app);
const db = getFirestore(app);

export const signIn = async (credentials) => {
    try {
      await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
      )
      const q = query(collection(db, "users"), where("email", "==", credentials.email));
      const doc = await getDocs(q);
      if (doc.docs.length > 0) {
        const data = doc.docs[0].data();
        return data;
      }
      return null;
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        return toast.error("Invalid Email or Password");
      }
      if (err.code === "auth/invalid-email") {
        return toast.error("Please enter valid email");
      }
      if (err.code === "auth/weak-password") {
        return toast.error("The password provided is too weak.");
      }
    }

}

export const signUp = async (newUser) => {
  const otp = Math.floor(1000 + Math.random() * 9000)

    try {
      const userCredential = await createUserWithEmailAndPassword(
      auth,newUser.email, newUser.password
      );
      const user = userCredential.user;
      const dbRef = doc(db, "users", (user || {}).uid);
      return await setDoc(dbRef, {
        name: newUser.name,
        isVerified: false,
        otp: otp,
        email: newUser.email,
      })
    } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          toast.error("User already exists");
        }
      return err;
    }
}

export const logOut = async () => {
  await signOut()
}

export const verifyOTP = async (userId) => {
    try {
      const dbRef = doc(db, "users", userId);
      return await updateDoc(dbRef, {
        isVerified: true,
        otp: '',
      })
    } catch (err) {
      toast.error("Something went wrong");
      return err;
    }

}