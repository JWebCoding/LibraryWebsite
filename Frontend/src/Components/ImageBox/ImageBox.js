import React from "react";
import './ImageBox.css';
// import Image from '../../Images/rowShot1.jpg'

const ImageBox= props =>{
    return(
        <img id={props.id} className={props.class} src={props.src} alt={props.alt} />
    );
}

export default ImageBox;