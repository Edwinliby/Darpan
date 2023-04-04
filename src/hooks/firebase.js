
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { createContext } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyCLF48sJlUTSsKzZTAPgMopATDD4mubKzk",
  authDomain: "darpan-d0cc2.firebaseapp.com",
  projectId: "darpan-d0cc2",
  storageBucket: "darpan-d0cc2.appspot.com",
  messagingSenderId: "426620127734",
  appId: "1:426620127734:web:f050a8c7b93b6371275fd7",
  measurementId: "G-XX3W80GSFJ"
};


const app = initializeApp(firebaseConfig);
const  auth = getAuth(app);
const provider = new GoogleAuthProvider();


const signInWithGoogle = () => {
    console.log("sign in with google");

    signInWithPopup(auth, provider)
        .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        
        LocalStorage.setItem("user", JSON.stringify(user));
        LocalStorage.setItem("token", JSON.stringify(token));

        
        //store in context

        })
        .catch((error) => {
        console.log(error);
        });
    };

export {signInWithGoogle};