import React from "react";


const ImageList = (props) =>{

    const imagesDiv=props.images.map(({description,id,urls})=>{
        return(<img alt={description} key={id} src={urls.small}/>);
    })

    return (<div>{imagesDiv}</div>);
}

export default ImageList;