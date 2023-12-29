import React, { useState } from 'react';
import '../styles/FliterTextBox.css'; 
import FilterIcon from '../assests/filter.png';
const FilterTextBox = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleFilterIconClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <div className="filter-textbox-container">
        <input type="text" className="textbox" placeholder="Paymentmode" />
        <img
          src={FilterIcon}
          alt="filter"
          className="filter-icon"
          onClick={handleFilterIconClick}
        />

        {isDropdownVisible && (
          <div className="dropdown1">
              <div className="checkbox-options">
              <p>Payment Mode</p> 
              <p className='zone_button'>
                <label>
                  <input type="checkbox" value="Zone A" /> Prepaid
                </label><br />
                <label>
                  <input type="checkbox" value="Zone B" /> COD
                </label><br />
                </p>
              </div>
              <div className="button-container">
                <button className='clear1'>Clear All</button>
                <button className='clear'>Apply</button>
              </div>
            </div>
            
          
        )}
      </div>
    </>
  );
};

export default FilterTextBox;
