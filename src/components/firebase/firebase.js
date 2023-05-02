import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxUwR9UpxvOxsBYOedcf0B1brAJ8ihKvg",
  authDomain: "auth-f4e8d.firebaseapp.com",
  projectId: "auth-f4e8d",
  storageBucket: "auth-f4e8d.appspot.com",
  messagingSenderId: "1066590846054",
  appId: "1:1066590846054:web:3cad718b1b643c2d71c1a7"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };