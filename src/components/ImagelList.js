import React from "react";
import '../css/ImageList.css';
import ImageCard from "./ImageCard";

const ImageList = (props) =>{

    const imagesDiv=props.images.map((image)=>{
        return(<ImageCard key={image.id} image={image}/>);
    })

    return (<div className='image-list'>{imagesDiv}</div>);
}

export default ImageList;