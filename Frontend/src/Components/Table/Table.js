import React, { useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import "./Table.css";

const Table = ({ columns, data }) => {
  // const [loading, setLoading] = useState(true);

  // if (seconds === 3) {
  //   setLoading(false);
  // } else {
  //   setLoading(true);
  // }

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(
                  column.getSortByToggleProps()
                )}
              >
                {column.render("Header")}
                <span>
                  {/* {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""} */}
                  {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
