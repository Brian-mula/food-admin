import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    const config = useRuntimeConfig()
    console.log(config.apiKey)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALVh7VUEhHAd29cOSZSKJQqaAsitFWovk",
  authDomain: "food-8653e.firebaseapp.com",
  projectId: "food-8653e",
  storageBucket: "food-8653e.appspot.com",
  messagingSenderId: "626683976054",
  appId: "1:626683976054:web:c1e9ebcfe720200e998257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
  })
  