import "./NewPublisherPane.css";
import "./NewElementPaneGeneral.css";
import axios from "axios";
import { useState } from "react";

const NewPublisherPane = (props) => {
  const [publisherName, setPublisherName] = useState("");
  const [publisherLocation, setPublisherLocation] = useState("");

  const addNewPublisherToDatabase = async () => {
    await axios.post("http://localhost:8080/publishers/create", {
      publisher_name: publisherName,
      publisher_location: publisherLocation
    }).catch(error => {
      console.error("The following error occured!", error);
    });
  }

  return(
    <div id="new-element-pane">
      <div>
        <label htmlFor="publisherName">Publisher Name:</label>
        <input type="text" id="publisher-name" name="publisherName"
        onChange={(e) => setPublisherName(e.target.value)} />

        <label htmlFor="publisherLocation">Publisher Location:</label>
        <input type="text" id="publisher-location" name="publisherLocation"
        onChange={(e) => setPublisherLocation(e.target.value)}  />
      </div>
      <div>
      <button className="submit-button" onClick={() => addNewPublisherToDatabase()}> Add Publisher </button>
      </div>
    </div>
  )
}

export default NewPublisherPane;