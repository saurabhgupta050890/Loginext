import React, { useState, useEffect, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import pincodes from './pincodes.json';
import PincodeMap from "./pinmap";
import Table from "./Table";

function App() {
  const [pinCodes, setPinCodes] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    setPinCodes(pincodes.filter(x => x.pincode))
  }, []);

  const columns = useMemo(() => [
    {
      Header: 'PINCODE',
      accessor: 'pincode',
    },
    {
      Header: 'LATITUTE',
      accessor: 'lat',
    },
    {
      Header: "LONGITUTE",
      accessor: "lng"
    }
  ], []);

  return (
    <div>
      <header className="App-header">
        <span> Pincode Search </span>
      </header>

      <div className="App">
        <div className="one" >
          <Table columns={columns} data={pinCodes}></Table>
        </div>
          <PincodeMap pincodes={pinCodes} />
      </div>
    </div>
  );
}

export default App;
