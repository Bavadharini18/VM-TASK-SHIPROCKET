import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Shipment.css';
import Navbar from './Navbar';
import Orders from '../Pages/Orders'; 
import Delays from '../Pages/Delays'; 
import NDR from '../Pages/NDR';
import Courier from '../Pages/Courier';
import Wpcomm from '../Pages/Wpcomm';
import Rto from '../Pages/Rto';
import Overview from './Overview';
import Datepicker from './Datepicker1';
import FilterTextBox from './FilterTextBox';
import Courierdrop from './Courierdrop';
import Paymentmode from '../Pages/Paymentmode';
import Shipmentmode from '../Pages/Shipmentmode';
import noship from '../assests/noship.png';

const Shipments = () => {
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
    <>
      <div className='row'>
        <div className='dashboard col-5'>
        <b className='word'>Dashboard</b>
        <div className="dropdown">
            <select id="destinationDropdown" value={selectedOption} onChange={handleSelectChange}>
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
            </select>
          </div>
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
          <Courierdrop/>
          <Paymentmode />
          <Shipmentmode />
        </div>
      </div>
      
      <div className='row'>
       <div className='zone'><b className='head'>Zone Wise Shipments</b>     
       <img className='imag1' src={noship} alt="noship" />
       <p className='word2'>Data not found for the selected filters.</p> 
</div>
      </div>
      <div className='row'>
      <div className='zone'><b className='head'>Shipment's Screen</b> 
      <span className='toggle'>
        <label class="switch">
  <input type="checkbox" onclick="toggleContent()" />
  <span class="slider round"></span>
  <span class="toggle-content"></span>
</label>

        </span>
      <img className='imag1' src={noship} alt="noship" />      
        <p className='word2'>Data not found for the selected filters.</p> 
</div>
      </div>
      <div className='row bk-ship'>
        <div className='ship1 col-4'><b className='head'>Shipment's Channel</b> 
        <img className='imag1' src={noship} alt="noship" />   
            <p className='word2'>Data not found for the selected filters.</p> 
</div>
        <div className='ship2 col-4'><b className='head'>Weight Profile (in Kgs)</b>
        </div>
        <div className='ship3 col-4'><b className='head'>Shipment's Zone</b>
        <img className='imag1' src={noship} alt="noship" /> 
        <p className='word2'> Data not found for the selected filters.</p> 
        </div>
      </div>
      </>
  );
};

export default Shipments ;
