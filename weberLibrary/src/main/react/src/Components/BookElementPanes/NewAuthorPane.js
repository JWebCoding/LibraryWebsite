import axios from "axios";
import { useState } from "react";
import libraryService from "../../services/library.service";

import "./NewAuthorPane.css";
import "./NewElementPaneGeneral.css";

function NewAuthorPane(props) {

  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  const createNewAuthor = async () => {
    await axios.post("http://localhost:8080/authors/create", {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName})
    .catch(error => {
      console.error("The following error occured when adding an Author!", error);
    });
  }

  return (
    <div id="new-element-pane">
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" 
        onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="middleName">Middle Name:</label>
        <input type="text" id="middleName" name="middleName" 
        onChange={(e) => setMiddleName(e.target.value)}/>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" 
        onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div>
        <button className="submit-button" onClick={() => createNewAuthor()}>Add Author</button>
      </div>
    </div>
    
  )
};

export default NewAuthorPane;