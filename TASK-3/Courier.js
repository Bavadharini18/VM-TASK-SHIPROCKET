import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import noship from '../assests/noship.png';
import '../styles/Courier.css';
import Navbar from './Navbar';
import Orders from '../Pages/Orders'; 
import Delays from '../Pages/Delays'; 
import NDR from '../Pages/NDR';
import Shipments from '../Pages/Courier';
import Wpcomm from '../Pages/Wpcomm';
import Rto from '../Pages/Rto';
import Overview from './Overview';
import Datepicker from './Datepicker1';
import FilterTextBox from './FilterTextBox';
import Paymentmode from '../Pages/Paymentmode';

const Courier= () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'international') {
      navigate('/International');
    }
  };
  return (
      <div className='row'>
        <div className='dashboard col-5'>
        <b className='word'>DASHBOARD</b>
        <div className="dropdown">
            <select id="destinationDropdown" value={selectedOption} onChange={handleSelectChange}>
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
            </select>
          </div>
        </div>
        <Navbar />
        <p className='stat1'></p>
      <div className="container">
        <Routes>
          <Route path="/Overview" element={<Overview/>} />
          <Route path="/Order" element={<Orders />} />
          <Route path="/Shipments" element={<Shipments/>} />
          <Route path="/NDR" element={<NDR />} />
          <Route path="/Wpcomm" element={<Wpcomm/>} />
          <Route path="/Rto" element={<Rto />} />
          <Route path="/Courier" element={<Courier />} />
          <Route path="/Delays" element={<Delays/>} />
        
        </Routes>
      </div>
      <div className='row'>
        <div className='cal'>
          <Datepicker />
          <FilterTextBox />
          <Paymentmode />
        </div>
      </div>
     <div className='row'>
      <div className='empty'>
      <img className='imag1' src={noship} alt="noship" />
      <p className='word2'>No Shipments for selected filter.<br></br>Please Change your filter.</p> 

      </div>
     </div>
    </div>
  );
};

export default Courier;
