import { useState } from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [logStat, setLogStat] = useState("LogIn");

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          
          <li>Cart</li>
          <button
            className="logBtn"
            onClick={() => {
              logStat == "LogIn" ? setLogStat("Logout") : setLogStat("LogIn");
            }}
          >
            {logStat}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
