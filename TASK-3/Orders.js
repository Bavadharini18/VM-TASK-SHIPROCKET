import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Orders.css';
import noship from '../assests/noship.png';
import Navbar from './Navbar';
import Delays from '../Pages/Delays'; 
import NDR from '../Pages/NDR';
import Shipments from '../Pages/Courier';
import Courier from '../Pages/Courier';
import Wpcomm from '../Pages/Wpcomm';
import Rto from '../Pages/Rto';
import Overview from './Overview';
import Datepicker from './Datepicker1';
import FilterTextBox from './FilterTextBox';
import Courierdrop from './Courierdrop';
import Paymentmode from '../Pages/Paymentmode';
import Shipmentmode from '../Pages/Shipmentmode';
import prepaid from'../assests/prepaid.png';

const Orders = () => {
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
      <div className='count1 col-12'>
      <table>
    <thead><p className='orders_count'>Orders Count</p>
      <tr>
        <th>Date</th>
        <th>Total Orders</th>
        <th>Pickup Unscheduled</th>
        <th>Pickup scheduled</th>
        <th>Intransit</th>
        <th>Delivered</th>
        <th>UnDelivered</th>
        <th>RTO</th>
        <th>Lost/Damaged</th>
        <th>Cancelled</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
  <p className='word2'>Orders' data not found for the selected filters.</p>
  <div className='b-buttons'> <p className='button1'>&#171; Previous</p>
  <p className='button2'>Next &#187;</p></div>
 
      </div>
    </div>
    <div className='row'>
      <div className='b-orders'>
        <div className='pre col-4'>
          <b className='head'>Prepaid vs. COD Orders</b>
          {/* <div className='imag201'>
          <img className='imag20' src={prepaid} alt="prepaid" />
          </div> */}
            <img className='imag1' src={noship} alt="noship" />
        </div>
        <div className='Buyer col-4'>
        <b className='head'>Buyer Demographics</b> 
        {/* <div className='last'>
        <label for="dropdown"></label>
<select id="dropdown">
  <option value="option1">7 days</option>
  <option value="option2">15 days</option>
  <option value="option3">30 days</option>
  <option value="option2">3 Months</option>
  <option value="option2">6 Months</option> 
  <option value="option2">1 year</option>
</select>  </div>   */}
<img className='imag1' src={noship} alt="noship" />
<p className='word2'>Customers' data not found for the selected filters.</p> 
    </div>
        <div className=' Location col-4'>
        <b className='head'>Most Popular Orders Location</b><span className='bk_count'>
            last 30 days
          </span>
          <img className='imag1' src={noship} alt="noship" />
          <p className='word2'>Orders' data not found for the selected filters.</p> 
        </div></div>
    </div>
    <div className='row'>
      <div className='b-chart'>
      <div className='chart col-6'>
        <b className='head'>Top 10 customers</b>
        <div className='last'>
        <label for="dropdown"></label>
<select id="dropdown">
  <option value="option1">7 days</option>
  <option value="option2">15 days</option>
  <option value="option3">30 days</option>
  <option value="option2">3 Months</option>
  <option value="option2">6 Months</option> 
  <option value="option2">1 year</option>
</select>
</div>
        <div className='table-1'>
        <table>
       <thead>
        <tr>
        <th>Customer Name</th>
        <th>Order Count</th>
        <th>Revenue</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
    <p className='word2'>Customers' data not found for the selected filters.</p>
        </div>
      </div>
      <div className='chart1 col-6'>
        <div className='topic'><b className='head'>Top 10 Products</b>
        <div className='last'>
    <label for="dropdown"></label>
<select id="dropdown">
  <option value="option1">7 days</option>
  <option value="option2">15 days</option>
  <option value="option3">30 days</option>
  <option value="option2">3 Months</option>
  <option value="option2">6 Months</option> 
  <option value="option2">1 year</option>
</select></div> 
</div>
      <div className='table-1'>
        <table>
       <thead>
        <tr>
        <th>Product Name</th>
        <th>Unit Sold</th>
        <th>Revenue</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
    <p className='word2'>Products' data not found for the selected filters.</p> 
        </div>
      </div>
      </div>  
    </div>
    </>
  );
};

export default Orders;
