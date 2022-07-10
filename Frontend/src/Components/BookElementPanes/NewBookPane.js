import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import NewBookPaneMethods from "./NewBookPaneMethods";
import NotificationBox from "./NotificationBox";
import "./NewBookPane.css";
import "./NewElementPaneGeneral.css";


function NewBookPane(props) {

  const [notificationList, setNotificationList]=useState([{id:1, text:"TEST"}, {id:2, text:"Test2"}, {id:3, text:"TEST"}]);
  
  // Hooks for select menu content
  const [authorNamesList, setAuthorNamesList]=useState([]);
  const [publisherNamesList, setPublisherNamesList]=useState([]);
  const [combinedGenreNamesList, setCombinedGenreNamesList]=useState([]);
  const [languageNamesList, setLanguageNamesList]=useState([]);
  const [seriesNamesList, setSeriesNamesList]=useState([]);

  // Hooks for book variables
  const [bookTitle, setBookTitle]=useState("");
  const [bookAuthor, setAuthor]=useState();
  const [bookPublisher, setPublisher]=useState();
  const [bookISBN, setBookISBN]=useState();
  const [bookCopyright, setBookCopyright]=useState();
  const [bookPages, setBookPages]=useState();
  const [bookEdition, setBookEdition]=useState();
  const [bookFormat, setBookFormat]=useState();
  const [bookGenre, setBookGenre]=useState();
  const [bookLanguage, setBookLanguage]=useState();
  const [bookSeries, setBookSeries]=useState("");
  const [bookSeriesPart, setBookSeriesPart]=useState();

  //Other Variables
  const genreSelectRef=useRef(null);
  const genreOptions=[
    {value: "Non-Fiction", label: "Non-Fiction"}, {value: "Fiction", label: "Fiction"}];

  useEffect(() => {( () => {
    fillElementLists();
    })();
  }, []);

  const fillElementLists = async () => {
    // The following get values for each of the select menus -
    // and then add the values to their respective lists.
    try{
      await NewBookPaneMethods.getAuthors().then(value =>{
        setAuthorNamesList(value);
      })
    } catch(e) {
      printErrors(e);
    }

    try{
      await NewBookPaneMethods.getGenres().then(value =>{
        setCombinedGenreNamesList([
          {label:"Non-Fiction", options: value[0]},
          {label:"Fiction", options: value[1]}]
        )
      })
    } catch(e) {
      printErrors(e);
    }

    try{
      await NewBookPaneMethods.getLanguages().then(value =>{
        setLanguageNamesList(value);
      })
    } catch(e) {
      printErrors(e);
    }

    try{
      await NewBookPaneMethods.getPublishers().then(value =>{
        setPublisherNamesList(value);
      })
    } catch(e) {
      printErrors(e);
    }

    try{
      await NewBookPaneMethods.getSeries().then(value =>{
        setSeriesNamesList(value);
      })
    } catch(e) {
      printErrors(e);
    }

  }

  const addNewBookToDatabase = async () => {
    await axios.post("http://localhost:8080/books/create", {
    title: bookTitle, 
    authorID: bookAuthor, 
    publisherID: bookPublisher,
    copyright: bookCopyright,
    isbn: bookISBN,
    edition: bookEdition,
    genreID: bookGenre,
    seriesID: bookSeries,
    series_part: bookSeriesPart,
    format: bookFormat,
    pages: bookPages,
    languageID: bookLanguage})
    .catch(error => {
      console.error("The following error occured when adding a Book!", error);
    });
    
  }

  function printErrors(error){
    console.log("Error Stack:", error.stack);
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
  }

  return (
    <div id="new-element-pane">
      <div>
        <label htmlFor="title">Title:</label> 
        <input type="text" id="title" name="title" 
        onChange={(e) => setBookTitle(e.target.value)}/>

        <label htmlFor="author-select">Author:</label> 
        <Select options={authorNamesList} id="author-select" className="select-box"
        onChange={(choice) => setAuthor(choice.value)}/>

        <label htmlFor="publisher-select">Publisher:</label> 
        <Select options={publisherNamesList} id="publisher-select" className="select-box"
        onChange={(choice) => setPublisher(choice.value)}/>
      </div>

      <div>
        <label htmlFor="isbn">Isbn:</label> 
        <input type="text" id="isbn" name="isbn" 
        onChange={(e) => setBookISBN(e.target.value)} maxLength="13"/>

        <label htmlFor="copyright:">Copyright:</label> 
        <input type="text" id="copyright" name="copyright" 
        onChange={(e) => setBookCopyright(e.target.value)} maxLength="4"/>

        <label htmlFor="pages">Pages:</label> 
        <input type="text" id="pages" name="pages"
        onChange={(e) => setBookPages(e.target.value)} maxLength="4"/>

        <label htmlFor="edition">Edition:</label> 
        <input type="text" id="edition" name="edition"
        onChange={(e) => setBookEdition(e.target.value)} maxLength="2"/>
      </div>

      <div>
        <label>Format:</label>
        <div className="sub-div">
          <label htmlFor="hardback">Hardback</label>
          <input type="radio" id="hardback" className="radio-button" name="format" 
          value={"1"} onChange={(e)=> setBookFormat(e.target.value)}/>
          
          <label htmlFor="paperback">Paperback</label>
          <input type="radio" id="paperback" className="radio-button" name="format" 
          value={"0"} onChange={(e)=> setBookFormat(e.target.value)}/>
        </div>
        
        <label htmlFor="genre-select">Genre:</label>
        <Select ref={genreSelectRef} options={combinedGenreNamesList} id="genre-select" className="select-box" name="genre-select"
        onChange={(choice) => setBookGenre(choice.value)}/>
      </div>

      <div>
        <label htmlFor="language-select">Language:</label>
        <Select options={languageNamesList} id="language-select" className="select-box"
        onChange={(choice) => setBookLanguage(choice.value)}/>
        
        <label htmlFor="series-select">Series:</label>
        <Select options={seriesNamesList} id="series-select" className="select-box"
        onChange={(choice) => setBookSeries(choice.value)}/>
        
        <label htmlFor="series-part">Series Part:</label>
        <input name="series-part" id="series-part" type="text"
        onChange={(e) => setBookSeriesPart(e.target.value)} maxLength="2"/>
      </div>
      <div>
        <button className="submit-button" onClick={() => addNewBookToDatabase()}>Add Book</button>
      </div>
      <NotificationBox id="book-notification-box" notificationList={notificationList}/>
    </div>
  )
};

export default NewBookPane;