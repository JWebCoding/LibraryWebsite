import React, { useEffect, useState } from "react";
import { useTable, useSortBy, useRowSelect, usePagination} from "react-table";
import "./Table.css";

const Table = ({ columns, data }) => {

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, 
    gotoPage, previousPage, nextPage, pageOptions, state: {pageIndex, pageSize}, 
    canNextPage, canPreviousPage, pageCount, setPageSize} =

    useTable({ columns, data, initialState: {pageIndex: 0, pageSize:20} }, 
    useSortBy, useRowSelect, usePagination);

  return (
    <div>


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
                  {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ""}
                </span>
              </th>
            ))}
          </tr> 
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row, i) => {
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

<div className="pagination">
  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
  {' '}
  <button onClick={() => previousPage()} disabled={!canPreviousPage}>{'<'}</button>
  {' '}
  <button onClick={() => nextPage()} disabled={!canNextPage}>{'>'}</button>
  {' '}
  <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
  {' '}
  <span>
    Page{' '}
    <strong>
      {pageIndex + 1} of {pageOptions.length}
    </strong>{' '}
  </span>
  <span>
    | Go to page:{' '}
    <input
      type="number"
      defaultValue={pageIndex + 1}
      onChange={e => {
        const page = e.target.value ? Number(e.target.value) - 1 : 0
        gotoPage(page)
      }}
      style={{ width: '100px' }}
    />
  </span>{' '}
  {/* <select
    value={pageSize}
    onChange={e => {
      setPageSize(Number(e.target.value))
    }}
  >
    {[10, 20, 30, 40, 50].map(pageSize => (
      <option key={pageSize} value={pageSize}>
        Show {pageSize}
      </option>
    ))}
  </select> */}
</div>
</div>
  );
};

export default Table;
