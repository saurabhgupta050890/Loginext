import React, { useState } from "react";
import { useTable, useFilters } from "react-table";

export default function Table({ columns, data }) {

    const [filterInput, setFilterInput] = useState("");

    // Update the state when input changes
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("pincode", value);
        setFilterInput(value);
    };


    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups if your table have groupings
        rows, // rows for the table based on the data passed
        prepareRow,
        setFilter // Prepare the row (this function need to called for each row before getting the row props)
    } = useTable({
        columns,
        data
    }, useFilters);

    return (
        <div>
            <div className="Input">
            <input className="input" type="text" placeholder="Search Pincode here .... "
                    value={filterInput}
                    onChange={handleFilterChange}
                    placeholder={"Search name"}
                    style={{
                        "width": "100%"
                    }}
                />
            </div>

            <table {...getTableProps()} className="table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}