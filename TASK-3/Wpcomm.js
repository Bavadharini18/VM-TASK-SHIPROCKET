
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/wpcomm.css';
import order_total from '../assests/order_total.svg';
import whatsapp from '../assests/whatsapp.svg';
import blue_tick from '../assests/blue_tick.png';
import query_resolved from '../assests/query_resolved.svg';
import noship from '../assests/noship.png';
import Navbar from './Navbar';
import Orders from '../Pages/Orders'; 
import Delays from '../Pages/Delays'; 
import NDR from '../Pages/NDR';
import Shipments from '../Pages/Courier';
import Courier from '../Pages/Courier';
import Rto from '../Pages/Rto';
import Overview from './Overview';


const Wpcomm = () => {
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
      
      <div className='row tab1'>
      <div className='whole col-6'>
        <div className='orders1 col-3'>
        <img className='order_pic' src={order_total} alt="order_total" />
        <div className='wpcom'>
        <h4>0</h4>
        <p>Total Orders</p>
        </div>
        </div>
        <div className='messages col-3'>
        <img className='wp_pic' src={whatsapp} alt="whatsapp" />
        <div className='wpcom'>
        <h4>0</h4>
        <p>Total Message sent</p>
        </div>
        </div>
      </div>
      <div className='whole col-6'>
        <div className='orders1 col-3'>
        <img className='blue_tick' src={blue_tick} alt="blue_tick" />
        <div className='wpcom'>
        <h4>0 %</h4>
        <p>Message read and rate</p>
        </div>
        </div>
        <div className='messages col-3'><p>
        </p>
        <img className='query' src={query_resolved} alt="query_resolved" />
        <div className='wpcom'>
        <h4>0 %</h4>
        <p>Queries resolved</p>
        </div>
        </div>
      </div>
      </div>
      <div className='row tab2'>
        <div className='view col-6'><p className='stat'>Top 5 most viewed status</p>  
        <img className='imag1' src={noship} alt="noship" />
        <p className='word2'>Customers' data not found for the selected filters.</p> 
        </div>
        <div className='msg col-6'><p className='stat'>Message sent over time</p> 
        <img className='imag1' src={noship} alt="noship" />
        <p className='word2'>Customers' data not found for the selected filters.</p>  
        </div>
      </div>
   </>
  );
};

export default Wpcomm;

