import React,{useEffect,useState} from 'react';
import {db,auth} from "E:\MS-project\server\firebase_config.js"
import {addDoc,collection} from "firebase/firestore"
import {useNavigate} from'react-router-dom';
function postData({Auth}) {
    
    const [title,setTitle]=useState();
    const [data,setData]=useData();
    let navigate=useNavigate();
    const collectionRef=collection(db,"postdocument");
    //sample push data
    /*const postIntoDb=async()=>{
        await addDoc(collectionRef,{
            title,
            data,
            author:{
                name:auth.currentUser.displayName,
                id:auth.currentUser.uid
            },
        });
        navigate("/")//login page;
    }*/ 
    useEffect(() => {
      if(!Auth)
        {
            navigate("/");//login page
        }
    }, [])
    
    //title,data comes from state make sure to set them
    //make sure to convert your document data into string before setting data
    //react code: 
}