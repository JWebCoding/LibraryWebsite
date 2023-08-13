import React from "react";
import libraryService from "../../services/library.service";
import axios from "axios";

// This pane is a testing ground for various ideas.

function TestPane() {

  const[bookTitle, setBookTitle] = React.useState();
  const[bookInfo, setBookInfo] = React.useState({});
  const[bookID, setBookID] = React.useState(null);

  const getBook = async () => {
    try{
      // const response = await axios.get(commands.getSpecificBook(bookID));
      const response = await libraryService.getAll();
      console.log(response)
      // setBookInfo(response.data[0])
    } catch(error) {
  
    }
  }

  function handleChange(event){
    setBookID(event.target.value);
  }

  return (
    <div id="TestPane">
      <h1>TESTING AREA</h1>
      <main>
        <input id="bookIdField" onChange={handleChange}></input>
        <button id="submitButton" onClick={()=>getBook()}>Get Book</button>
        <h1 id="bookTitleField">{bookInfo.title}</h1>
      </main>
    </div>
  );
};

export default TestPane;