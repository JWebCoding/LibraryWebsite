import React from "react";
import Table from "../Table/Table";
import "./BookViewPane.css";
import { data, columns } from "../../Data/TableData";

const BookViewPane = (props) => {
  const tableData = React.useMemo(() => data, []);
  const tableColumns = React.useMemo(() => columns, []);

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
            <button>Refresh Table Data</button>
            <button>Reset Table</button>
          </div>
          <div id="BookTable">
            <Table data={tableData} columns={tableColumns} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookViewPane;
