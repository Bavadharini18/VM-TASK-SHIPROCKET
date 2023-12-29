import React, { useState } from 'react';
import '../styles/Overview.css';
import {  Route, Routes } from 'react-router-dom';
import orderdash from'../assests/orderdash.svg';
import revenue from '../assests/revenue.svg';
import average from '../assests/average.svg';
import { useNavigate } from 'react-router-dom';
import noship from '../assests/noship.png';
import Navbar from './Navbar';
import Orders from '../Pages/Orders'; 
import Delays from '../Pages/Delays'; 
import NDR from '../Pages/NDR';
import Shipments from '../Pages/Courier';
import Courier from '../Pages/Courier';
import Wpcomm from '../Pages/Wpcomm';
import Rto from '../Pages/Rto';
import grey from '../assests/grey.png';
import green from '../assests/green.png';
import red from '../assests/red.png';
import black from '../assests/black.png';
import yellow from '../assests/yellow.png';
import Imageslide1 from './Imageslide1';
import map from'../assests/Map.png';

const Overview = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  
    if (selectedValue === 'international') {
      // navigate('/International');
    }
  };
  return (
    <>
    <div className='content'>
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
      <Imageslide1 />
      {/* <Slider /> */}
    <div className='row'>
      <div className='col-10'></div>
    </div>
    <div className='row boxes'>
      <div className='box1 col-4'>
        <img className='imag' src={orderdash} alt="orderdash" />
        <div className='right'>
      <p>Today's Order.</p>
      <h4>0</h4>
      <p>Yesterday's order 0</p>
    </div>
      </div>
      <div className='bigbox1 col-8'><h4 className='head'>Shipment details</h4><div className='ship_card'><div className='card'>0
        </div>
        <div className='card'>0
        </div>
        <div className='card'>0
        </div>
        <div className='card'>0
        </div>
        <div className='card'>0
        </div>
        <div className='card'>0
        </div>
        </div>
        <span className='work'>Total Shipments</span>
        <span className='work1'>Pickup Pending</span>
        <span className='work2'>In-Transit</span>
        <span className='work3'>Delivered</span>
        <span className='work4'>NDR Pending</span>
        <span className='work5'>RTO</span>

        </div>
    </div>
    <div className='row boxes'>
      <div className='box2 col-4'>
        <img className='imag' src={revenue} alt="revenue" />
        <div className='right'>
      <p>Today's Order.</p>
      <h4> ₹ 0</h4>
      <p>Yesterday's  ₹ 0</p>
    </div>
    </div>
      <div className='bigbox2 col-8'><h4 className='head'>NDR Details</h4><div className='calen'> 
         <div className='card'>0
        </div> <div className='card1'>0
        </div> <div className='card2'>0
        </div> <div className='card3'>0
        </div></div>
        <span className='work'>Total NDR</span>
        <span className='work1'> Reattempt Request</span>
        <span className='work2'>Buyer Reattempt</span>
        <span className='work3'>NDR Delivered</span>
        </div>
    </div>
    <div className='row boxes'>
      <div className='box3 col-4'>
        <img className='imag' src={average} alt="average" />
        <div className='right'>
      <p>Average Shipping.</p>
      <h4> ₹ 0</h4>
    </div>
    </div>
      <div className='bigbox3 col-8'><h4 className='head'>COD Status</h4><div className='calen'>
      <div className='card'>₹ 0
        </div> <div className='card1'>₹ 0
        </div> <div className='card2'>₹ 0
        </div> <div className='card3'>₹ 0
        </div></div>
        <span className='work'>Total COD</span>
        <span className='work1'> COD available</span>
        <span className='work2'>COD Pending</span>
        <span className='work3'>Last COD Remitted</span></div>
    </div>
    <div className='row split'>
      <div className='couriers col-4'>
        <div className='box4'><h4 className='head'>Couriers Split</h4><img className='noship' src={noship} alt="noship"/>
</div>
      </div>
      <div className='status col-4'>
        <div className='box5'><h4 className='head'>Overall Shipment Status</h4><img className='noship' src={noship} alt="noship"/>
</div>
      </div>
      <div className='Perf col-4'>
        
      <div className='box6'><h4 className='head'>Delivery Performance</h4><img className='noship' src={noship} alt="noship"/>
      
</div>
      </div>
    </div>
    <div className='row split'>
    <div className='Performance col-4'>  
    <div className='orders_drop'>
    <label for="dropdown"></label>
<select id="dropdown">
  <option value="option1">Orders</option>
  <option value="option2">RTO</option>
</select><span className='bk_count'> last 30 days </span></div> 
<img className='imag5' src={map} alt="map" />
      </div>
      <div className='Shipments col-4'>
     <b className='head' >Shipments-Zone Distribution</b>
     <table>
    <tr>
      <th><img className='im1g' src={grey} alt="grey" />
      Zone A</th>
      <td>0</td>
    </tr>
    <tr>
      <th><img className='im1g' src={green} alt="green" />Zone B</th>
      <td>0</td>
    </tr>
    <tr>
      <th><img className='im1g' src={red} alt="red" />Zone C</th>
      <td>0</td>
    </tr>
    <tr>
      <th>
      <img className='im1g' src={black} alt="black" />Zone D</th>
      <td>0</td>
    </tr>
    <tr>
      <th><img className='im1g' src={yellow} alt="yellow" />Zone E</th>
      <td>0</td>
    </tr>
  </table>

      </div>
      <div className='Performance1 col-4'>
       <b className='head'> Revenue</b>
       <table>
    <tr>
      <th>Last 90 days</th>
      <td>₹ 0</td>
    </tr>
    <tr>
      <th>This week</th>
      <td>₹ 0</td>
    </tr>
    <tr>
      <th>This month </th>
      <td>₹ 0</td>
    </tr>
    <tr>
      <th>This quarter</th>
      <td>₹ 0</td>
    </tr>
  </table>
      </div>
    </div>
    <div className='row ShipmentOverview'>
      <div className='table1 col-12'>
      <table>
    <thead><p className='ship'>Shipment Overview by Courier</p>
      <tr>
        <th>Courier Name</th>
        <th>Pickup Unscheduled</th>
        <th>Pickup scheduled</th>
        <th>In-Transit</th>
        <th>Delivered</th>
        <th>NDR Raised</th>
        <th>NDR Delivered</th>
        <th>NDR Pending</th>
        <th>RTO</th>
        <th>Lost/Damaged</th>
        <th>Total shipment</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <img className='imag1' src={noship} alt="noship" />
    <p className='word2'>Couriers' data not found this filter.</p> 
   
      </div>
    </div>
    </div>
    </>
  );
  };


export default Overview;
