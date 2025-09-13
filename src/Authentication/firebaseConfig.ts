import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAWBr9Y1diABTVKZsRdJXCWSsLSyhUOJkg",
    authDomain: "finance-advisor-1d922.firebaseapp.com",
    projectId: "finance-advisor-1d922",
    storageBucket: "finance-advisor-1d922.appspot.com",
    messagingSenderId: "766683757314",
    appId: "1:766683757314:android:1bf932921390cf2f80601b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
