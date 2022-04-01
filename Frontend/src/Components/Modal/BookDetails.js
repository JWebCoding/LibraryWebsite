import React from "react";
import ReactDOM from "react-dom";
import "./BookDetails.css";
import "./Modal.css";

const BookDetails = ({ isopen, onclose }) => {
  if (!isopen) return null;
  let BookTitle = "TEST";
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <header className="modal-header">
          <h2>Details for {BookTitle}</h2>
        </header>
        <main className="modal-main">
          <form>
            <div className="row" id="row 1">
              <div className="sub-row" id="row-title">
                <label htmlFor="title">Title:</label>
                <input id="title" readOnly placeholder="The Adventures of Sherlock Holmes" />
              </div>

              <div className="sub-row" id="row-author">
                <label htmlFor="author">Author:</label>
                <input id="author" readOnly placeholder="Arthur Conan Doyle"/>
              </div>
            </div>
            <div className="row" id="row 2">
              <div className="sub-row">
                <label htmlFor="publisher">Publisher:</label>
                <input id="publisher" readOnly placeholder="W. W. Norton and Company" />
              </div>
              <div className="sub-row" id="row-copyright">
                <label htmlFor="copyright">Copyright:</label>
                <input id="copyright" readOnly placeholder="2020" />
              </div>

              <div className="sub-row" id="row-isbn">
                <label htmlFor="isbn">ISBN:</label>
                <input id="isbn" readOnly placeholder="978-3-16-148410-0" />
              </div>
            </div>
            <div className="row" id="row 3">
              <div className="sub-row" id="row-genre">
                <label htmlFor="genre">Genre:</label>
                <input id="genre" readOnly placeholder="history - European" />
              </div>

              <div className="sub-row" id="row-pages">
                <label htmlFor="pages">Pages:</label>
                <input id="pages" readOnly placeholder="1,458" />
              </div>

              <div className="sub-row" id="row-format">
                <label htmlFor="format">Format:</label>
                <input id="format" readOnly placeholder="Hardcover" />
              </div>
            </div>
          </form>
        </main>
        <footer className="modal-footer">
          <button onClick={onclose}>Close</button>
          <p>Work in progress</p>
        </footer>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default BookDetails;
