import React from "react";
import Accordion from "../AccordionMenu/Accordion";
import { accordionData } from "../../Data/AccordionData";
import "./AddBookManualPane.css";

function AddBookManualPane(props) {

  return (
    <div id="AddBookPane">
      <h1>Add a new book to the library.</h1>
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

export default AddBookManualPane;