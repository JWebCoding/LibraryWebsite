// Holds the data and columns for the BookView Table.
export const data = [
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    genre: "Adventure",
    publisher: "Harcourt",
    copyright: 1844,
    isbn: 97845325138,
    pages: 958,
    format: "Hardcover",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    publisher: "Penguin",
    copyright: 1856,
    isbn: 97878431846,
    pages: 1413,
    format: "Hardcover",
  },
  {
    title: "The Hunt for Red October",
    author: "Tom Clancy",
    genre: "Thriller",
    publisher: "Naval Institute Press",
    copyright: 1984,
    isbn: 870212850,
    pages: 273,
    format: "Hardcover",
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    publisher: "Readers Digest ",
    copyright: 1988,
    isbn: 895773201,
    pages: 1756,
    format: "Hardcover",
  },
  {
    title: "Truman ",
    author: "David McCullough",
    genre: "Biography",
    publisher: "Simon & Schuster",
    copyright: 1844,
    isbn: 671456547,
    pages: 1158,
    format: "Hardcover",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    publisher: "Ace",
    copyright: 1856,
    isbn: 9780593099322,
    pages: 648,
    format: "Hardcover",
  },
];

export const columns = [
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
];