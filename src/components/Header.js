import "./header.css";
import logo from "../images/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import arrowUp from "../images/icon-arrow-down.svg";
import arrowDown from "../images/icon-arrow-up.svg";
import { useState } from "react";
import todo from "../images/icon-todo.svg";
import calender from "../images/icon-calendar.svg";
import reminder from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";

function Header() {
  const [open, setOpen] = useState(false);
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header>
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <nav className={open ? "navbar open" : "navbar"}>
          <div onClick={() => setOpenFeatures(!openFeatures)}>
            <button>
              Features{" "}
              {openFeatures ? (
                <img src={arrowDown} alt="" />
              ) : (
                <img src={arrowUp} alt="" />
              )}
            </button>
            {openFeatures && (
              <ul className="submenu">
                <li>
                  <img src={todo} alt="" />
                  TodoList
                </li>
                <li>
                  <img src={calender} alt="" />
                  Calendar
                </li>
                <li>
                  <img src={reminder} alt="" />
                  Reminder
                </li>
                <li>
                  <img src={planning} alt="" />
                  Planing
                </li>
              </ul>
            )}
          </div>
          <div>
            <button onClick={() => setOpenCompany(!openCompany)}>
              Company{" "}
              {openCompany ? (
                <img src={arrowDown} alt="" />
              ) : (
                <img src={arrowUp} alt="" />
              )}
            </button>
            {openCompany && (
              <ul className="submenu">
                <li>History</li>
                <li>OurTeam</li>
                <li>Blog</li>
              </ul>
            )}
          </div>
          <div className="career">
            <button href="/">Career</button>
          </div>
          <div>
            <button href="/">About</button>
          </div>

          <div className="navbutton">
            <button>Login</button>
            <button id="register">Register</button>
          </div>
        </nav>
      </div>
      <div className="menu" onClick={handleClick}>
        {open ? <FaTimes fontSize={30} /> : <FaBars fontSize={30} />}
      </div>

      <div className="hidden">
        <button>Login</button>
        <button id="register">Register</button>
      </div>
    </header>
  );
}

export default Header;
