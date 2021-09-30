// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors())

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

// app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAklBEHqjVStt-KfpRmtBD_oHgSMb_Y9K0",
  authDomain: "techtreck-8a422.firebaseapp.com",
  projectId: "techtreck-8a422",
  storageBucket: "techtreck-8a422.appspot.com",
  databaseURL:
    "https://techtreck-8a422-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "634362721671",
  appId: "1:634362721671:web:f59e7fb283d4d0f9de4f22",
  measurementId: "G-RJXBZBGXLN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// const analytics = getAnalytics(app);

export { db };
