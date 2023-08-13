import React from "react";
import { useState } from "react";
import "./Accordion.css";

const Accordion = ({title, id, content}) => {
  const [isActive, setIsActive]=useState(false);

  const setBorderStyle = () => {
    setIsActive(!isActive);
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