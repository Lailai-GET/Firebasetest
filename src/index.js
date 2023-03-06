// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOlXGvDo3b3rnjHRhgK4CWKzpz2VwthUo",
  authDomain: "testproject-b131e.firebaseapp.com",
  projectId: "testproject-b131e",
  storageBucket: "testproject-b131e.appspot.com",
  messagingSenderId: "303278852296",
  appId: "1:303278852296:web:e38f0dd7becfcaa81abdfd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// try {
//   const test = await addDoc(collection(db, "testDocument"), {
//     string: "test2",
//     number: 222,
//   });
//   console.log("should write", test.id, test.data);
// } catch (e) {
//   console.error("error why?", e);
// }

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}