import React, { useState } from "react";
import "./Nav.css";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button"
import Dropdown from "./Dropdown"

const Nav: React.FC<{}> = () => {
  const [click, setClick] = useState(false);
  const [dropdown,setDropdown]=useState(false);



  const closeMobileMenu=()=>setClick(false)

  const onMouseEnter=()=>{
    if(window.innerWidth < 960){
        setDropdown(false)
    }else{
        setDropdown(true)
    }
  }
  const onMouseLeave=()=>{
    if(window.innerWidth < 960){
        setDropdown(false)
    }else{
        setDropdown(false)
    }
  }

  return (
    <div className="Navbar">
      <nav className="navbar">
        <div className="logo-area">
        <a href="/" className="logo">
          snap
        </a>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              {" "}
              Features <FaChevronDown fontSize={10} />
            </a>
           {dropdown && <Dropdown />}

          </li>

          <li className="nav-item">
            <a href="/" className="nav-links" onClick={closeMobileMenu}>
              {" "}
              Company <FaChevronDown fontSize={10} />
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a href="/" className="nav-links">Career</a>
          </li>

          <li className="nav-item">
            {" "}
            <a href="/" className="nav-links"> About</a>
          </li>
        </ul>

        </div>
        
        <div className="menu-icon" onClick={() => setClick(!click)}>
          {click ? <FaBars fontSize={30} /> : <FaTimes fontSize={30} />}
        </div>
        <Button />
      </nav>

    </div>
  );
};

export default Nav;
