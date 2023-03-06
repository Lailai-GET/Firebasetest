// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  doc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOlXGvDo3b3rnjHRhgK4CWKzpz2VwthUo",
  authDomain: "testproject-b131e.firebaseapp.com",
  projectId: "testproject-b131e",
  storageBucket: "testproject-b131e.appspot.com",
  messagingSenderId: "303278852296",
  appId: "1:303278852296:web:e38f0dd7becfcaa81abdfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore();
const test = doc(firestore, "testCollection/testDocument")
async function writeToTest() {
  const testWrite = 
    {
      string: "test2",
      number: 22
    }

  try {
    await setDoc(test, testWrite);
    console.log("should write")
  } catch (error) {
    console.log(`errors? ${error}`);
  }
}
writeToTest()