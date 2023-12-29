import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Ndr.css';
import Navbar from './Navbar';
import Orders from '../Pages/Orders'; 
import Delays from '../Pages/Delays'; 
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
import noship from '../assests/noship.png';

const NDR = () => {
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
     <div className='ndr_boxes'>
     <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">NDR Raised</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">NDR raised percentage</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0 %</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Action Required</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Delivered</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
    <div class="rectangle merged"> 
      <div class="top"> 
        <p class="name">Post NDR</p> 
      </div> 
      <div class="bottom"> 
        <p class="number">0</p> 
      </div> 
    </div> 
     </div>
     </div>
     <div className='row'>
      <div className='ndr_box'>
      <span className='ndr_boxes1 col-6'><b className='head'>NDR response</b>
      <img className='imag1' src={noship} alt="noship" />
    </span>
        
      <div className='ndr_boxes2 col-6'><b className='head'>NDR funnel</b>
      <img className='imag1' src={noship} alt="noship" />
      </div>
     </div>
     </div>
     <div className='row'>
      <div className='bndr_box'>
      <div className='bndr_boxes1 col-6'><b className='head'>NDR Reason Split</b>
      <img className='imag1' src={noship} alt="noship" />
      <p className='word2'>No NDR raised for selectedd filters</p> 
      </div>
      <div className='bndr_boxes2 col-6'><b className='head'>NDR Status</b>
      <img className='imag1' src={noship} alt="noship" />
      <p className='word2'>No NDR raised for selectedd filters</p> 
      </div>
     </div>
     <div className='row'>
      <div className='ndr_table'>
      <div className='table-1'>
      <table className='ndrrtable'>
    <thead>
      <tr>
        <th></th>
        <th>NDR Shipments</th>
        <th>1st NDR Attempt</th>
        <th>1st NDR Delivered</th>
        <th>2nd NDR Attempt</th>
        <th>2nd NDR attempt</th>
        <th>3rd NDR attempt</th>
        <th>3rd NDR Delivered</th>
        <th>Total Delivered</th>
        <th>Total RTO</th>
        <th>Lost/Damaged</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total NDR Raised</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Seller response</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Seller positive response</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Buyer Response</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
    </tbody>
  </table>

        </div>
      </div>
     </div>
     <div className='row b_response'>
      <div className='ndr_ver col-4'><b className='head'>NDR to Delivery Attempt</b>
      <img className='imag1' src={noship} alt="noship" />
      <p className='word2'>No NDR raised for selected filters.</p> 


      </div>
      <div className='seller_response col-4'><b className='head'>Seller Response</b>
      <img className='imag1' src={noship} alt="noship" />
      <p className='word2'>No NDR raised for selected filters</p> 

      </div>
      <div className='buyer_response col-4'><b className='head'>Buyer Response</b>
      <img className='imag1' src={noship} alt="noship" />
      <p className='word2'>No NDR raised for selected filters.</p> 

      </div>
     </div>
     <div className='row b_success'>
      <div className='success_courier col-6'><b className='head'>Success by Courier</b>
      <table className='succes_courier'>
  <thead>
    <tr>
      <th></th>
      <th>Total</th>
      <th>Zone A</th>
      <th>Zone B</th>
      <th>Zone C</th>
      <th>Zone D</th>
      <th>Zone E</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>NDR Raised</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
    <tr>
      <td>NDR Delivered</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

      </div>
      <div className='ndr_reason col-6'><b className='head'>NDR Reason</b>
      <img className='imag1' src={noship} alt="noship" />
      <p className='word2'>No NDR raised for selected filters.</p> 
</div>
     </div>
     </div>

     </>
  );
};

export default NDR;
