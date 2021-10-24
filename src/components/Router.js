import { useEffect, useState } from "react";

const Router=({path,children})=>{
    console.log("Inside Router");
    const [windowPathName,setWindowPathName]=useState(window.location.pathname);

    useEffect(()=>{
        const changeUrl=()=>{
            setWindowPathName(window.location.pathname);
        }

        window.addEventListener('popstate',changeUrl);

        return(()=>{
            window.removeEventListener('popstate',changeUrl);
        })

    },[])
    
    return windowPathName.toLocaleUpperCase() === path.toLocaleUpperCase() ? children : null;
}

export default Router;