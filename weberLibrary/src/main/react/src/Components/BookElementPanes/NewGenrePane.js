import "./NewGenrePane.css";
import "./NewElementPaneGeneral.css";
import Select from "react-select";
import { useState } from "react";
import axios from "axios";

function NewGenrePane(props) {
  const [genreType, setGenreType] = useState();
  const [genreName, setGenreName] = useState("");

  const genreOptions=[
    {value: 1, label: "Non-Fiction"}, {value: 0, label: "Fiction"}];

    const addNewGenreToDatabase = async () => {
      await axios.post("http://localhost:8080/genres/create", {
        genre_name: genreName,
        genre_type: genreType
      }).catch(error => {
      console.error("The following error occured when adding a Genre!", error);
    });
    }

  return(
    <div id="new-element-pane">
      <div>
        <label type="input" htmlFor="type">Type:</label>
        <label htmlFor="genreTypeSelect">Genre:</label>
        <Select options={genreOptions} defaultValue={genreOptions[0]} id="genre-type-select" className="select-box"
        onChange={(choice)=> setGenreType(choice.value)} />

        <label type="input" htmlFor="genreName">Genre Name:</label>
        <input type="text" name="genreName" id="genreName" 
        onChange={(e)=> setGenreName(e.target.value)}/>
      </div>
      <div>
        <button className="submit-button" onClick={()=> addNewGenreToDatabase()}> Add Genre </button>
      </div>
    </div>
  )
}

export default NewGenrePane;