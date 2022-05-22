
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZz_I6Aiz-dTwvNKDeJ0nLWaXg1sbR3xY",
  authDomain: "pranto-car-accessories.firebaseapp.com",
  projectId: "pranto-car-accessories",
  storageBucket: "pranto-car-accessories.appspot.com",
  messagingSenderId: "335929929786",
  appId: "1:335929929786:web:40a6776a26c8f18a438503"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;