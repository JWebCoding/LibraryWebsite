import React, { useState, useEffect, useMemo } from "react";
import Table from "../Table/Table";
import "./BookViewPane.css";
import { columns } from "../../Data/TableColumns";
import libraryService from "../../services/library.service";

const BookViewPane = (props) => {

  // Hooks
  const [bookInfo, setBookInfo] = useState([]);
  const [searchInfo, setSearchInfo] = useState();
  const tableColumns = useMemo(() => columns, []);

  useEffect(() => {(async () => {
    try{
      showLastTenBooksHandler();
    } catch(e) {
      printErrors(e);
    }
    })();
  }, []);

  const searchForBooks = async () => {
    const response = await libraryService.searchForBooks(searchInfo);
    fillTable(response.data);
  }

  const showLastTenBooksHandler = async () => {
    const response = await libraryService.getTenBooks();
    fillTable(response.data);
  }

  function fillTable(bookData){
    setBookInfo(bookData);
  }

  const showAllBooksHandler = async () => {
    try{
      const allbooks = await libraryService.getAllBooks();
      fillTable(allbooks.data)
    } catch(e) {
      printErrors(e);
    }
  }

  const bookDetailHandler = () => {
    props.openBookDetailsModal();
  };

  function printErrors(error){
    console.log("Error", error.stack);
    console.log("Error", error.name);
    console.log("Error", error.message);
  }

  const handleChange = (event) => {
    setSearchInfo(event.target.value);
  }

  return (
    <React.Fragment>
      <div id="BookViewPane">
        <h1 id="PaneTitle">The Collection</h1>
        <div id="Search-Bar">
          <input className="searchBar" onChange={handleChange} placeholder="Type here..."/>
          <button onClick={() => searchForBooks(searchInfo)}>Search</button>
        </div>
        <div id="Table-and-Controls">
          <div id="Table-Buttons">
            <button onClick={() => bookDetailHandler()}>View Book Details</button>
            <button onClick={() => showAllBooksHandler()}>Show All Books</button>
            <button onClick={() => showLastTenBooksHandler()}>Reset Table</button>
          </div>
          <div id="BookTable">
            <Table data={bookInfo} columns={tableColumns} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookViewPane;
