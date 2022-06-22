import React from "react";
import Accordion from "../AccordionMenu/Accordion";
import { accordionData } from "../../Data/AccordionData";
import "./AddBookPane.css";

const AddBookPane = (props) => {

  return (
    <div id="AddBookPane">
      <h1>Add Book Pane</h1>
      <main>
        <div className="accordion-menu">
          {accordionData.map(({ title, id, content }) => (
          <Accordion title={title} id={id} content={content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default AddBookPane;