import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}
            className={item.ClassName}
               
                onClick={() => setClick(false)}>
            
                
              
                {item.tittle}
         
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;