import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Rto.css';
import Navbar from './Navbar';
import Orders from '../Pages/Orders'; 
import Delays from '../Pages/Delays'; 
import NDR from '../Pages/NDR';
import Shipments from '../Pages/Courier';
import Courier from '../Pages/Courier'; 
import Wpcomm from '../Pages/Wpcomm';
import Overview from './Overview';
import Datepicker from './Datepicker1';
import FilterTextBox from './FilterTextBox';
import Courierdrop from './Courierdrop';
import Paymentmode from '../Pages/Paymentmode';
import Shipmentmode from '../Pages/Shipmentmode';
import noship from '../assests/noship.png';

const Rto = () => {
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
        <div className='cal'>
          <Datepicker />
          <FilterTextBox />
          <Courierdrop/>
          <Paymentmode />
          <Shipmentmode />
        </div>
      </div>
    <div className='row'>
      <div className='Rto_count'>
      <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Total RTO</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">RTO Percentage</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0%</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">RTO Initaited</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">RTO Undelivered</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">RTO Delivered</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div>  
      </div>
</div>
<div className='row'>
  <div className='insc'>
  <b className='head'>RTO Count</b>
  <img className='imag1' src={noship} alt="noship" />
  <p className='word2'>No RTO for the selected filters.</p> 
  </div>
</div>
<div className='row'>
      <div className='RTO_2'>
        <div className='RTO_status col-9'>
        <b className='head'>RTO Status</b>
        <img className='imag1' src={noship} alt="noship" />
        <p className='word2'>NO RTO  for the selected filters.</p> 
        </div>
        <div className='RTO_reasons col-3'>
        <b className='head'>RTO Reasons</b>
        <img className='imag1' src={noship} alt="noship" />
        <p className='word2'>NO RTO  for the selected filters.</p> 
        </div>
      </div>
</div>
<div className='row'>
  <div className='top_count'>
    <div className='pincode col-6'>
    <b className='head'>Top RTO-Pincodes</b>
    <span className='bk_count'>last 30 days</span>
    <div className='table-1'>
        <table>
       <thead>
        <tr>
        <th>Pincode</th>
        <th>RTO Count</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
    <p className='word2'>No RTO for selected filters.</p> 
        </div>
    </div>
    <div className='city col-6'>
    <b className='head'>Top RTO-City</b><span className='bk_count'>last 30 days</span>
    <div className='table-1'>
        <table>
       <thead>
        <tr>
        <th>Pincode</th>
        <th>RTO Count</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
    <p className='word2'>No RTO for selected filters.</p> 
    </div>
  </div>
</div>
<div className='row'>
  <div className='top_count1'>
    <div className='courier col-6'>
    <b className='head'>Top Rto-Courier</b>
    <span className='bk_count'>last 30 days </span>
    <div className='table-1'>
        <table>
       <thead>
        <tr>
        <th>Pincode</th>
        <th>RTO Count</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
    <p className='word2'>No RTO for selected filters.</p> 
    </div>
    </div>
    <div className='customer col-6'>
    <b className='head'>Top RTO-Customer</b>
    <span className='bk_count'>
            last 30 days
          </span>
          <div className='table-1'>
        <table>
       <thead>
        <tr>
        <th>Pincode</th>
        <th>RTO Count</th>
        <th>Percentage</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
    <p className='word2'>No RTO for selected filters.</p> 
    </div>
    </div>
  </div>
</div>
</div>
  </>
  );
};

export default Rto;
