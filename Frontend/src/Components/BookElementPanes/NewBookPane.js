import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import httpCommon from "../../services/http-common";
import libraryService from "../../services/library.service";

import "./NewBookPane.css";
import "./NewElementPaneGeneral.css";

const NewBookPane = (props) => {
  const authorListRef=useRef(null)
  
  // Hooks for select menu content
  const [authorNamesList, setAuthorNamesList]=useState([]);
  const [publisherNamesList, setPublisherNamesList]=useState([]);
  const [nonFictionGenreNamesList, setNonFictionGenreNamesList]=useState([]);
  const [fictionGenreNamesList, setFictionGenreNamesList]=useState([]);
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

  // Load content for all select boxes on load.
  useEffect(() => {(async () => {
    try{
      getAuthors();
      getGenres();
      getLanguages();
      getPublishers();
      getSeries();
    } catch(e) {
      printErrors(e);
    }
    })();
  }, []);

  const getAuthors = async () => {
    // Get data from server.
    const response = (await libraryService.getAllAuthors()).data;

    let authorsArray=[];

    // Iterate through response, combine the name elements and then 
    // create a new array of the name and ID to be added to state.
    response.forEach(element => {
      let fullName;

      if(element.middle_name === null){
        fullName = (element.first_name+" "+element.last_name);
      } else {
        fullName = (element.first_name+" "+element.middle_name+" "+element.last_name);
      }

      // Create temporay object of the Fullname and its 
      // associated ID then push them to the larger array.
      let tempObject={ value: element.authorID, label:fullName};
      authorsArray.push(tempObject);
    });

    // Add the final array to state
    setAuthorNamesList(authorsArray);
  }

  const getGenres = async () => {
    const response = (await libraryService.getAllGenres()).data;
    let nonFictionGenresArray=[];
    let fictionGenresArray=[];

    // Iterate through the response and filter the genres into 
    // seperate arrays based on their type.
    response.forEach(element => {
      let tempObject={ value: element.genreID, label: element.genre_name};
      if(element.genre_type === 1){
        nonFictionGenresArray.push(tempObject);
      }else {
        fictionGenresArray.push(tempObject);
      }
    });

    // Add the final arrays to their respective states
    setNonFictionGenreNamesList(nonFictionGenresArray);
    setFictionGenreNamesList(fictionGenresArray);
  }

  const getLanguages = async () => {
    const response = (await libraryService.getAllLanguages()).data;
    let languagesArray=[];

    response.forEach(element => {
      let tempObject={ value: element.languageID, label: element.language_name};
      languagesArray.push(tempObject);
    });
    
    setLanguageNamesList(languagesArray);
  }

  const getPublishers = async () => {
    const response = (await libraryService.getAllPublishers()).data;
    let publishersArray=[];

    response.forEach(element => {
      let tempObject={ value: element.publisherID, label: element.publisher_name};
      publishersArray.push(tempObject);
    });
    
    setPublisherNamesList(publishersArray);
  }

  const getSeries = async () => {
    const response = (await libraryService.getAllSeries()).data;
    let seriesArray=[];

    response.forEach(element => {
      let tempObject={ value: element.seriesID, label: element.series_name};
      seriesArray.push(tempObject);
    });
    
    setSeriesNamesList(seriesArray);
  }

  const determineGenreSelectContents =(choice)=> {
    if(choice==="Non-Fiction"){
      genreSelectRef.options=[nonFictionGenreNamesList];
    } else {
      genreSelectRef.options=[fictionGenreNamesList];
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
      console.error("The following error occured!", error);
    });
    
  }

  const testPrint = (thingToPrint) => {
    console.log(thingToPrint)
  }

  function printErrors(error){
    console.log("Error", error.stack);
    console.log("Error", error.name);
    console.log("Error", error.message);
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
        
        <label htmlFor="genreTypeSelect">Genre:</label>
        <Select options={genreOptions} defaultValue={genreOptions[0]} id="genre-type-select" className="select-box"
        onChange={(choice)=> determineGenreSelectContents(choice.value)} />

        <Select ref={genreSelectRef} options={nonFictionGenreNamesList} id="genre-select" className="select-box"
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
    </div>
  )
};

export default NewBookPane;