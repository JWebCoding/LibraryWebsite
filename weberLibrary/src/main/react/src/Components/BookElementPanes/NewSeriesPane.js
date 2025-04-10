import "./NewSeriesPane.css";
import "./NewElementPaneGeneral.css";
import axios from "axios";
import { useState } from "react";

function NewSeriesPane() {
  const [seriesName, setSeriesName] = useState();

  const addNewSeriesToDatabase = async () => {
    await axios.post("http://localhost:3000/series/create", {
      series_name: seriesName
    }).catch(error => {
      console.error("The following error occured when adding a Series!", error);
    });
  }

  return (
    <div id="new-element-pane">
      <div>
        <label htmlFor="seriesName">Series Name:</label>
        <input type="text" id="seriesName" name="seriesName" />
      </div>
      <div>
      <button className="submit-button" onClick={() => addNewSeriesToDatabase()}> Add Series </button>
      </div>
    </div>
  )
}

export default NewSeriesPane;