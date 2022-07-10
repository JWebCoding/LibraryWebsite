import "./NewLanguagePane.css";
import "./NewElementPaneGeneral.css";
import axios from "axios";
import { useState } from "react";

function NewLanguagePane(props) {
  const [languageName, setLanguageName] = useState("");
  const [languageSuffix, setLanguageSuffix] = useState("");

  const addNewLanguageToDatabase = async () => {
    await axios.post("http://localhost:8080/languages/create", {
      language_name: languageName,
      language_suffix: languageSuffix
    }).catch(error => {
      console.error("The following error occured when adding a Language!", error);
    });
  }

  return(
    <div id="new-element-pane">
      <div>
        <label htmlFor="languageName">Language Name:</label>
        <input type="text" id="language-name" name="languageName"
        onChange={(e) => setLanguageName(e.target.value)} />

        <label htmlFor="languageSuffix">Language Suffix:</label>
        <input type="text" id="language-suffix" name="languageSuffix"
        onChange={(e) => setLanguageSuffix(e.target.value)} maxLength="2"/>
      </div>
      <div>
      <button className="submit-button" onClick={() => addNewLanguageToDatabase()}> Add Language </button>
      </div>
    </div>
  )
}

export default NewLanguagePane;