import React, { useEffect } from "react";
import Table from "../Table/Table";
import "./BookViewPane.css";
import { columns } from "../../Data/TableData";
import LibraryDataService from "../../services/library.service";
import commands from "../../commands";
import axios from "axios";
import libraryService from "../../services/library.service";

const BookViewPane = (props) => {

  // Hooks
  const [bookInfo, setBookInfo] = React.useState([]);
  const tableColumns = React.useMemo(() => columns, []);

  useEffect(() => {(async () => {
    try{
      const response = await axios.get(commands.getTenBooks());
      setBookInfo(response.data);

    } catch(e) {
      console.log("Error", e.stack);
      console.log("Error", e.name);
      console.log("Error", e.message);
    }
    })();
  }, []);

  const refreshTableHandler = async () => {
    try{
      const allbooks = LibraryDataService.getAll();
      console.log((await allbooks).data);

    } catch(e) {
      console.log("Error", e.stack);
      console.log("Error", e.name);
      console.log("Error", e.message);
    }
  }

  const bookDetailHandler = () => {
    props.openBookDetailsModal();
  };

  return (
    <React.Fragment>
      <div id="BookViewPane">
        <h1 id="PaneTitle">The Collection</h1>
        <div id="Search-Bar">
          <input className="searchBar" />
          <button>Search</button>
        </div>
        <div id="Table-and-Controls">
          <div id="Table-Buttons">
            <button onClick={() => bookDetailHandler()}>
              View Book Details
            </button>
            <button onClick={()=>refreshTableHandler()}>Refresh Table Data</button>
            <button>Reset Table</button>
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
