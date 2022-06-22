import React from "react";
import { useState } from "react";
import "./Accordion.css";

const Accordion = ({title, id, content}) => {
  const [isActive, setIsActive]=useState(false);

  const setBorderStyle = (givenID) => {
    setIsActive(!isActive);
    if(isActive){
      document.getElementById({givenID}).style.borderBottomLeftRadius="10px";
      document.getElementById({givenID}).style.borderBottomRightRadius="10px";
    } else {
      document.getElementById({givenID}).style.borderBottomLeftRadius="0px";
      document.getElementById({givenID}).style.borderBottomRightRadius="0px";
    }
  }
  return (
    
    <div className="accordion-item">
      <div className="accordion-title" id={id} onClick={()=>setBorderStyle()}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>

  )
  
};

export default Accordion;