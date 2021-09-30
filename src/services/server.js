import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getDatabase, set, ref } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAklBEHqjVStt-KfpRmtBD_oHgSMb_Y9K0",
  authDomain: "techtreck-8a422.firebaseapp.com",
  projectId: "techtreck-8a422",
  storageBucket: "techtreck-8a422.appspot.com",
  messagingSenderId: "634362721671",
  appId: "1:634362721671:web:f59e7fb283d4d0f9de4f22",
  measurementId: "G-RJXBZBGXLN",
  databaseURL:
    "https://techtreck-8a422-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = app.auth();
const firestore = app.firestore();
const db = getDatabase(app);

// Google Login
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await firestore
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await firestore.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Login with email and password
const registerWithEmailAndPassword = async (
  name,
  email,
  password,
  postal,
  gender,
) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await firestore.collection("users").doc(user.uid).set({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      postal: postal,
      gender: gender,
    });

    set(ref(db, "users/" + user.uid), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email: email,
      postal: postal,
      gender: gender,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Password reset link
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

//Logout
const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  firestore,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
