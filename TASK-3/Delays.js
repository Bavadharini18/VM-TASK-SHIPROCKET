import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/delay.css';
import Navbar from './Navbar';
import Orders from '../Pages/Orders'; 
import NDR from '../Pages/NDR';
import Shipments from '../Pages/Courier';
import Courier from '../Pages/Courier';
import Wpcomm from '../Pages/Wpcomm';
import Rto from '../Pages/Rto';
import Overview from './Overview';
import noship from '../assests/noship.png';


const Delays = () => {
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
        <b className='word'>DASHBOARD</b>
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
        <div className='delay_counter'>
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Misrouted Shipments</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">ODA Shipments</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Lost Shipments</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Damaged Shipments</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Destroyed Shipments</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
  </div> 
        </div>
      
       <div className='row'>
        <div className='delay_boxes'>
          <div className='Pickup col-6'>
          <b className='head1'>Pickup Pendency</b>
          <img className='imag1' src={noship} alt="noship" />
          <p className='word2'>No Delays.</p> 
          </div>
          <div className='Pickup col-6'>
          <b className='head1'>NDR to Reattempt Delays</b>
          <img className='imag1' src={noship} alt="noship" />
          <p className='word2'>No delays</p> 
          </div>
        </div>
        <div className='delay-boxes2'>
        <div className='intransit col-4'>
        <b className='head1'>In Transit Delay</b>
        <img className='imag1' src={noship} alt="noship" />
        <p className='word2'>No Delays.</p> 
        </div>
          <div className='rad col-4'>
          <b className='head1'>RAD to delivery delay</b>
          <img className='imag1' src={noship} alt="noship" />
          <p className='word2'>No Delays.</p> 
          </div>
          <div className='rto col-4'>
          <b className='head1'>RTO Delay</b>
          <img className='imag1' src={noship} alt="noship" />
          <p className='word2'>No Delays.</p> 
          <p className='stat2'></p>
          </div>
          </div>

       </div>
       </>
  );
};

export default Delays;
