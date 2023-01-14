import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBrBepJ1srTxiI0p-MWzn4w8EioXGKb2CU",
  authDomain: "randj-assessment.firebaseapp.com",
  projectId: "randj-assessment",
  storageBucket: "randj-assessment.appspot.com",
  messagingSenderId: "507060264875",
  appId: "1:507060264875:web:00195527c6aca1cc37bcee"
};

const app = initializeApp(firebaseConfig);
export default app;