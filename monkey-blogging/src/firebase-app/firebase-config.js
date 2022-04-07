import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9DKQlp5IwjAKJZPjHu-p-XZId61MEl9Q",
  authDomain: "monkey-blogging.firebaseapp.com",
  projectId: "monkey-blogging",
  storageBucket: "monkey-blogging.appspot.com",
  messagingSenderId: "483024495358",
  appId: "1:483024495358:web:483098406a1e3d6816fbaf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
