import React from 'react';
import {auth,provider} from "E:\MS-project\server\firebase_config.js"
import {signInWithPopup, SignInWithPopup} from "firebase/auth"

function logInWithGoogle({Auth}) {
    
    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("Auth",true);
            //make login state to true something like const [Auth,setAuth]=useSate();
         })
    }
    //react code:
}