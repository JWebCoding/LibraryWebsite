import React, { useEffect } from "react";
import Table from "../Table/Table";
import "./BookViewPane.css";
import { columns } from "../../Data/TableColumns";
import libraryService from "../../services/library.service";

const BookViewPane = (props) => {

  // Hooks
  const [bookInfo, setBookInfo] = React.useState([]);
  const tableColumns = React.useMemo(() => columns, []);

  useEffect(() => {(async () => {
    try{
      const response = await libraryService.getTenBooks();
      fillTable(response.data);
    } catch(e) {
      printErrors(e);
    }
    })();
  }, []);

  const searchForBooks = async () => {
    
  }

  const restTableContents = async () => {
    const response = await libraryService.getTenBooks();
    fillTable(response.data);
  }

  function fillTable(bookData){
    setBookInfo(bookData);
  }

  const refreshTableHandler = async () => {
    try{
      const allbooks = await libraryService.getAll();
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

  return (
    <React.Fragment>
      <div id="BookViewPane">
        <h1 id="PaneTitle">The Collection</h1>
        <div id="Search-Bar">
          <input className="searchBar" />
          <button onClick={() => searchForBooks()}>Search</button>
        </div>
        <div id="Table-and-Controls">
          <div id="Table-Buttons">
            <button onClick={() => bookDetailHandler()}>View Book Details</button>
            <button onClick={() => refreshTableHandler()}>Refresh Table Data</button>
            <button onClick={() => restTableContents()}>Reset Table</button>
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
