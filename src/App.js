import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import pincodes from './data/pincodes.json';
import PincodeMap from "./components/Map/Map";
import Table from "./components/Table/Table";

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
