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
        <input type="text" className="textbox" placeholder="Shipment Mode" />
        <img
          src={FilterIcon}
          alt="filter"
          className="filter-icon"
          onClick={handleFilterIconClick}
        />

        {isDropdownVisible && (
          <div className="dropdown1">
              <div className="checkbox-options">
              <p>Shipment Mode</p> 
              <p className='zone_button'>
                <label>
                  <input type="checkbox" value="Zone A" /> Surface
                </label><br />
                <label>
                  <input type="checkbox" value="Zone B" />  Air
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
