import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Overview from './Pages/Overview';
import Orders from './Pages/Orders';
import Shipments from './Pages/Shipments';
import NDR from './Pages/NDR';
import Wpcomm from './Pages/Wpcomm';
import Rto from './Pages/Rto';
import Courier from './Pages/Courier';
import Delays from './Pages/Delays';
import International from './Pages/Inter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/shipments' element={<Shipments />} />
        <Route path='/ndr' element={<NDR />} />
        <Route path='/wpcomm' element={<Wpcomm />} />
        <Route path='/rto' element={<Rto />} />
        <Route path='/courier' element={<Courier />} />
        <Route path='/delays' element={<Delays />} />
        <Route path='/international' element={<International/>} />
      </Routes>
    </Router>
  );
}
export default App;
