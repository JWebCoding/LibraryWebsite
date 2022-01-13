import React from "react";
import Table from "../Table/Table";
import "./BookViewPane.css";

const BookViewPane = (props) => {
  const data = React.useMemo(
    () => [
      {
        title: "The Count of Monte Cristo",
        author: "Alexandre Dumas",
        genre: "Adventure",
        publisher: "Harcourt",
        copyright: 1844,
        isbn: 97845325138,
        format: "Hardcover",
      },
      {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical Fiction",
        publisher: "Penguin",
        copyright: 1856,
        isbn: 97878431846,
        format: "Hardcover",
      },
      {
        title: "The Hunt for Red October",
        author: "Tom Clancy",
        genre: "Thriller",
        publisher: "Naval Institute Press",
        copyright: 1984,
        isbn: 870212850,
        format: "Hardcover",
      },
      {
        title: "The Adventures of Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery",
        publisher: "Readers Digest ",
        copyright: 1988,
        isbn: 895773201,
        format: "Hardcover",
      },
      {
        title: "Truman ",
        author: "David McCullough",
        genre: "Biography",
        publisher: "Simon & Schuster",
        copyright: 1844,
        isbn: 671456547,
        format: "Hardcover",
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        publisher: "Ace",
        copyright: 1856,
        isbn: 9780593099322,
        format: "Hardcover",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        className: "title",
        Header: "Title",
        accessor: "title",
      },
      {
        className: "author",
        Header: "Author",
        accessor: "author",
      },
      {
        className: "genre",
        Header: "Genre",
        accessor: "genre",
      },
      {
        className: "publisher",
        Header: "Publisher",
        accessor: "publisher",
      },
      {
        className: "copyright",
        Header: "CopyRight",
        accessor: "copyright",
      },
      {
        className: "isbn",
        Header: "ISBN",
        accessor: "isbn",
      },
      {
        className: "format",
        Header: "Format",
        accessor: "format",
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div id="BookViewPane">
        <h1 id="PaneTitle">The Collection</h1>
        <div id="BookTable">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default BookViewPane;
