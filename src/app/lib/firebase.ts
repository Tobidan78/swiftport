mport { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";



// 🔥 PUT YOUR CONFIG HERE

const firebaseConfig = {

  apiKey: "AIzaSyXXXXXX",

  authDomain: "firebase login domain",

  projectId: "swift-port",

  storageBucket: "file storage",

  messagingSenderId: "123456789",

  appId: "app identity",

};



// Initialize Firebase

const app = initializeApp(firebaseConfig);



// Export Firestore database

export const db = getFirestore(app);