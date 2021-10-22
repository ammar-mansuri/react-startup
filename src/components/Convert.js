import axios from "axios";
import react from "react";
import { useEffect, useState } from "react/cjs/react.development";


const Convert=({language,userInput})=>{

    const [translatedText,setTranslatedText]=useState("");
    const [deboucedText,setDeboucedText]=useState("");

    useEffect(()=>{
    
        const timerId=setTimeout(() => {
            console.log("Inside Timer");
            if(userInput){
                setDeboucedText(userInput)
            }
        }, 500);

        return(()=>{
            clearTimeout(timerId);
        })
        
    },[userInput]);

    useEffect(()=>{
        
        const translateApi=async ()=>{
        const response=await axios.post("https://translation.googleapis.com/language/translate/v2",{},{
            params:{
                q:deboucedText,
                target:language.value,
                key:'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
        setTranslatedText(response.data.data.translations[0].translatedText);
       } 

       if(deboucedText){
            translateApi();
       }
       
    },[deboucedText,language])

    return(
        <h4>{translatedText}</h4>
    );

}

export default Convert;

//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

