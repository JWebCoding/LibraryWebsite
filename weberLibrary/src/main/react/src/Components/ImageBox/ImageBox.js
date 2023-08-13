import React, {useState,useEffect} from "react";
import './ImageBox.css';

const ImageBox= props =>{
  const images =[
    "/Images/rowShot1.jpg",
    "/Images/rowShot2.jpg",
    "/Images/shelfShot.jpg",
  ];
  let arrayLength=images.length;
  
    // Hooks
    const [currentImage, setImage]=useState(images[0]);
    const [seconds, setSeconds] = useState(0);
    const [position, setPosition]=useState(0)

    // Change the picture every three seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      if(seconds===3){
        if(position>=arrayLength){
          setPosition(0);
        } else {
          setImage(images[position]);
        setPosition(position+1);
        setSeconds(0);
        }
      }
      return () => clearInterval(interval);
    });
    
    return(
        <img 
        id="Image"
        className="Image"
        src={currentImage}
        alt="Book Shelf"
        />
    );
}

export default ImageBox;