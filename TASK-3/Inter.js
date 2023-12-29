
import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import '../styles/International.css';
import orderdash from'../assests/orderdash.svg';
import revenue from '../assests/revenue.svg';
import average from '../assests/average.svg';

const Inter = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'domestic') {
      navigate('/domestic');
    }
  };

  return (
    <>
      <div className='row'>
        <div className='dashboard col-5'>
        <b className='word6'>DASHBOARD</b>
        <div className="dropdown">
            <select id="destinationDropdown" value={selectedOption} onChange={handleSelectChange}>
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
            </select>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='row bk-box'>
      <div className='box8 col-4'>
        <img className='imag' src={orderdash} alt="orderdash" />
      </div>
      <div className='bigbox8 col-8'><h4 className='head'>Shipment details</h4></div>
    </div>
    <div className='row bk-box'>
      <div className='box9 col-4'>
        <img className='imag' src={revenue} alt="revenue" />
      </div>
      <div className='box11'></div>
      </div>
    <div className='row bk-box'>
      <div className='box10 col-4'>
        <img className='imag' src={average} alt="average" />
      </div>
       </div>
       </div>
       <div className='row'>
        <div className='distri_box'>
          <div className='Courier_Split col-4'>
          </div>
          <div className='Country_Distribution col-4'>
          </div>
          <div className='Revenue col-4'>
          </div>
        </div>
       </div>
      </>
        );
      };
export default Inter;
